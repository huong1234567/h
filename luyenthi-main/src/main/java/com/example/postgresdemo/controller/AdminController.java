package com.example.postgresdemo.controller;

import java.net.http.HttpRequest;
import java.util.List;
import java.util.Optional;
import java.util.Locale.Category;
import java.util.UUID;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.example.postgresdemo.dao.BanDAO;
import com.example.postgresdemo.dao.BoDeDAO;
import com.example.postgresdemo.dao.MonHocDAO;
import com.example.postgresdemo.dao.NguoiDungDAO;
import com.example.postgresdemo.dao.TongKetDAO;
import com.example.postgresdemo.model.Ban;
import com.example.postgresdemo.model.BoDe;
import com.example.postgresdemo.model.MonHoc;
import com.example.postgresdemo.model.NguoiDung;
import com.example.postgresdemo.model.ThongKe;
import com.example.postgresdemo.model.Tongket;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AdminController {
    @Autowired
    NguoiDungDAO ndd;

    @Autowired
    BanDAO bandao;
    @Autowired
    MonHocDAO mhdao;

    @Autowired
    BoDeDAO bddao;

    @Autowired
    TongKetDAO tkdao;
    @Autowired
    JavaMailSender javaMailSender;

    @RequestMapping("/qluser")
    public String product(Model model) {
        NguoiDung item = new NguoiDung();// item buộc lên form
        model.addAttribute("item", item);

        List<NguoiDung> items = ndd.findAll();// items buộc lên bảng
        model.addAttribute("items", items);
        return "qlUser";
    }

    private void send(String to, String subject, String body) throws MessagingException {
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body, true);
        javaMailSender.send(message);
    }

    @RequestMapping(value = "/qluser/delete/{idND}")
    public String showDeleteConfirmation(@PathVariable String idND, Model model) {
        // Lấy thông tin người dùng dựa trên id
        NguoiDung user = ndd.findById(idND).orElse(null);
        if (user == null) {
            // Nếu không tồn tại, có thể chuyển hướng hoặc xử lý theo yêu cầu của bạn
            return "redirect:/login";
        }
        // Đặt thông tin người dùng vào model để hiển thị trong thông báo xác nhận
        model.addAttribute("user", user);

        model.addAttribute("useremail", user.getEmail());

        return "lydo1"; // Trang hiển thị xác nhận
    }

    @RequestMapping(value = "/qluser/delete/confirm", method = RequestMethod.POST)
    public String deleteConfirmed(@ModelAttribute("user") NguoiDung user, Model model, HttpServletRequest request) {
        // Lấy thông tin người dùng từ biểu mẫu
        String idND = user.getIdND();

        String selectedReason = request.getParameter("selectedReason");

        try {
            // Đặt chủ đề và nội dung của email
            String email = "duthihuonghk@gmail.com";
            String subject = "Xóa tài khoản người dùng";
            String body = "Lý do xóa tài khoản: " + selectedReason;
            // Gửi email
            send(email, subject, body);

        } catch (Exception e) {
            e.printStackTrace(); // Xử lý lỗi gửi email
        }
        // Thực hiện xóa
        ndd.deleteById(idND);
        return "redirect:/qluser";
    }

    @RequestMapping("/qluser/edit/{idND}")
    public String edit(Model model, @PathVariable("idND") String idND) {
        NguoiDung item = ndd.findById(idND).get();
        model.addAttribute("item", item);
        List<NguoiDung> items = ndd.findAll();
        model.addAttribute("items", items);
        return "qluser";
    }

    @RequestMapping("/qldiemad")
    public String viewqldiem(Model model) {
        List<MonHoc> subjectList = mhdao.findAll();
        model.addAttribute("subjectList", subjectList);
        model.addAttribute("selectedSubject", "Hóa");
        List<BoDe> deList = bddao.findAll();
        model.addAttribute("deList", deList);
        model.addAttribute("selectedDe", "");
        List<Tongket> tk = tkdao.findAll();
        model.addAttribute("tk", tk);
        return "qlDiemAdmin";

    }

    @RequestMapping("/qlmon")
    public String viewmonthi(Model model) {
        List<Ban> subjectList = bandao.findAll();
        model.addAttribute("subjectList", subjectList);
        model.addAttribute("selectedSubject", "BTN");
        MonHoc item = new MonHoc();// item buộc lên form
        model.addAttribute("item", item);
        List<MonHoc> items = mhdao.findAll();// items buộc lên bảng
        model.addAttribute("items", items);

        return "qlMonThi";
    }

    // cau hoi
    @RequestMapping("/cauhoi")
    public String cauhoi(Model model) {
        List<MonHoc> subjectList = mhdao.findAll();
        model.addAttribute("subjectList", subjectList);
        return "/cauhoi";
    }

    @RequestMapping("/qlmon/edit/{id}")
    public String editmon(Model model, @PathVariable("id") Integer id) {
        MonHoc item = mhdao.findById(id).get();
        model.addAttribute("item", item);
        MultipartFile imagesFile = item.getImagesFile();
        // Xử lý tệp tin ảnh và lưu trữ tên vào đối tượng NguoiDung
        if (imagesFile != null && !imagesFile.isEmpty()) {
            try {
                String imageName = imagesFile.getOriginalFilename();
                // Lưu tên tệp tin vào trường images của đối tượng NguoiDung
                item.setHinhAnh(imageName);
                // Lưu tệp tin vào thư mục images (nếu cần)
                // ...
            } catch (Exception e) {
                e.printStackTrace();
                // Xử lý nếu có lỗi khi xử lý tệp tin
            }
        }

        // Nếu item.Ban là null, tạo một đối tượng Ban với idBan là "BTN"
        if (item.getBan() == null) {
            Ban defaultBan = new Ban();
            defaultBan.setIdBan("BTN");
            item.setBan(defaultBan);
        }

        List<Ban> subjectList = bandao.findAll();
        model.addAttribute("subjectList", subjectList);
        List<MonHoc> items = mhdao.findAll();
        model.addAttribute("items", items);
        return "qlMonThi";
    }

    @RequestMapping("/qlmon/delete/{id}")
    public String deletemon(@PathVariable("id") int id) {
        mhdao.deleteById(id);
        return "redirect:/qlmon";
    }

    @RequestMapping("/qlmon/lammoi")
    public String lammoi(MonHoc item, Model model) {
        MonHoc mh = new MonHoc();
        mh.setFilemon("");
        mh.setHinhAnh("");

        mh.setTenMonHoc("");
        mh.setThoigian("");

        return "redirect:/qlmon";
    }

    @RequestMapping("/qlmon/createMon")
    public String createmon(MonHoc item, Model model) {
        mhdao.save(item);
        return "redirect:/qlmon";
    }

    @RequestMapping("/qlmon/update")
    public String capnhatmon(MonHoc item) {
        MultipartFile imagesFile = item.getImagesFile();
        // Xử lý tệp tin ảnh và lưu trữ tên vào đối tượng NguoiDung
        if (imagesFile != null && !imagesFile.isEmpty()) {
            try {
                String imageName = imagesFile.getOriginalFilename();
                // Lưu tên tệp tin vào trường images của đối tượng NguoiDung
                item.setHinhAnh(imageName);

            } catch (Exception e) {
                e.printStackTrace();
                // Xử lý nếu có lỗi khi xử lý tệp tin
            }
        }
        mhdao.save(item);
        return "redirect:/qlmon";
    }

    @RequestMapping("/qldethi")
    public String viewqlde(Model model, @RequestParam("p") Optional<Integer> p) {
        List<MonHoc> subjectList = mhdao.findAll();
        model.addAttribute("subjectList", subjectList);
        model.addAttribute("selectedSubject", "2");
        BoDe item = new BoDe();// item buộc lên form
        model.addAttribute("item", item);

        Pageable pageable = PageRequest.of(p.orElse(0), 4);
        Page<BoDe> items = bddao.findAll(pageable);// items buộc lên bảng
        model.addAttribute("items", items);

        return "qldethi";
    }

    //
    // @RequestMapping("/dethi")
    // public String load(Model model, @RequestParam("p") Optional<Integer> p) {
    // Pageable pageable = PageRequest.of(p.orElse(0), 4);
    // Page<BoDe> page = bddao.findAll(pageable);
    // model.addAttribute("boDeList", page);
    // addMonHocListToModel(model);
    // return "dethi";

    // }

    //
    @RequestMapping("/qldethi/edit/{idBoDe}")
    public String editbode(Model model, @PathVariable("idBoDe") Integer idBoDe,
            @RequestParam("p") Optional<Integer> p) {

        BoDe item = bddao.findById(idBoDe).get();
        model.addAttribute("item", item);
        List<MonHoc> subjectList = mhdao.findAll();
        model.addAttribute("subjectList", subjectList);

        Pageable pageable = PageRequest.of(p.orElse(0), 4);
        Page<BoDe> items = bddao.findAll(pageable);// items buộc lên bảng
        model.addAttribute("items", items);
        return "qldethi";
    }

    @RequestMapping("/qldethi/delete/{idBoDe}")
    public String deletebode(@PathVariable("idBoDe") Integer idBoDe) {
        bddao.deleteById(idBoDe);
        return "redirect:/qldethi";
    }

    @RequestMapping("/qldethi/createDethi")
    public String createbode(BoDe item, Model model) {
        bddao.save(item);
        return "redirect:/qldethi";
    }

    @RequestMapping("/qldethi/lammoi")
    public String lammoi(BoDe item, Model model) {
        BoDe bd = new BoDe();
        bd.setIdDe("");
        bd.setTenDe("");
        return "redirect:/qldethi";
    }

    @RequestMapping("/qldethi/update")
    public String capnhatbode(BoDe item) {
        bddao.save(item);
        return "redirect:/qldethi";
    }

    @RequestMapping("/qlban")
    public String viewqlban(Model model) {
        Ban item = new Ban();// item buộc lên form
        model.addAttribute("item", item);

        List<Ban> items = bandao.findAll();// items buộc lên bảng
        model.addAttribute("items", items);

        return "qlban";
    }

    @RequestMapping("/qlban/edit/{idBan}")
    public String editban(Model model, @PathVariable("idBan") String idBan) {
        Ban item = bandao.findById(idBan).get();
        model.addAttribute("item", item);
        List<Ban> items = bandao.findAll();
        model.addAttribute("items", items);
        return "qlban";
    }

    @RequestMapping("/qlban/delete/{idBan}")
    public String deleteban(@PathVariable("idBan") String idBan) {
        bandao.deleteById(idBan);
        return "redirect:/qlban";
    }

    @RequestMapping("/qlban/createBan")
    public String createban(Ban item, Model model) {
        if (item.getIdBan() == null || item.getIdBan().isEmpty()) {
            // Gán giá trị cho idND nếu nó chưa có
            item.setIdBan("Ban"); // Thay yourLogicToGenerateId() bằng logic của bạn để tạo ID
        }
        bandao.save(item);
        return "redirect:/qlban";

    }

    @RequestMapping("/qlban/lammoi")
    public String lammoi1(Ban item, Model model) {
        Ban ban = new Ban();
        ban.setIdBan(null);
        ban.setTenBan(null);

        return "redirect:/qlban";
    }

    @RequestMapping("/qlban/update")
    public String capnhatban(Ban item) {
        bandao.save(item);
        return "redirect:/qlban";
    }

    @RequestMapping("/return1")
    public String quaylai() {
        return "indexAd";
    }

    // thongke
    @GetMapping("/thongke")
    public String thongKe(Model model) {
        long countMonHoc = mhdao.countMonHoc();
        model.addAttribute("countMonHoc", countMonHoc);
        long countBoDe = bddao.countBoDe();
        model.addAttribute("countBoDe", countBoDe);
        // Thêm các giá trị khác cần thiết cho thống kê (số lượng đề, lượt làm bài, ...)

        return "qlthongke"; // Trả về tên của file HTML
    }

}
