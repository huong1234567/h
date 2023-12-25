var usersData = [
	{
		anh: "../img/c1.png",
		ten: "Q1",
		name: "question_01",
		made: "1",
		kq: "a",
		cb: 1,
		Answers: [{
			value: "a",
			//	Text : "y = x<sup>3</sup> - 3x +1",
			question1: "../img/testly.png",
		}, {
			value: "b",
			Text: "y = -x<sup>3</sup> + 3x +1"
		}, {
			value: "c",
			Text: "y = -x<sup>3</sup> - 3x -1"
		}, {
			value: "d",
			Text: "y = x<sup>3</sup> - 3x -1"
		},],
		nd: "Từ đồ thị ta thấy hệ số a>0 do nhánh phải hướng lên trên. Do đó loại B và C Mặt khác đồ thị cắt trục tung tại A(0;1).Do đó chọn A",
	},

	{
		ten: "Q2: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + d có đồ thị là đường  cong trong hình bên. Dấu của các hệ số thực a, b, c là",
		anh: "../img/testly.png",
		name: "question_01",
		made: "1",
		kq: "c",
		cb: 1,
		Answers: [{
			value: "a",
			//Text : "a<0, b>0, c<0",
			question1: "../img/test.PNG",
		}, {
			value: "b",
			Text: "a>0, b>0, c>0"
		}, {
			value: "c",
			Text: "a>0, b<0, c>0"
		}, {
			value: "d",
			Text: "a>0, b<0, c<0"
		},],
		nd: "Ta có đồ thị có hình dạng như trên với hàm bậc bốn trùng phương có hai điểm cực tiểu và một điểm cực đại nên a > 0, b < 0 . Giá trị cực đại lớn hơn 0 nên c > 0."
	},

	{
		ten: "Q3: Cho hình chóp S.ABC có đáy ABC là tam giác đều và SA vuông góc với đáy, AB = a. Khoảng cách từ C đến mặt phẳng (SAB) bằng",
		anh: "",
		name: "question_03",
		kq: "c",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "a căn 2 chia 2",
		}, {
			value: "b",
			Text: "a"
		}, {
			value: "c",
			Text: " a căn 3 chia 2",
		}, {
			value: "d",
			Text: "a chia c"
		},],
		nd: "",
		da: "../img/da3.png",
	},

	{
		ten: "Q4: Chọn ngẫu nhiên hai số trong 15 số nguyên dương đầu tiên. Xác suất chọn được hai số chẵn bằng",
		anh: "",
		name: "question_04",
		kq: "b",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "11/5",
		}, {
			value: "b",
			Text: "1/5"
		}, {
			value: "c",
			Text: " 5/4",
		}, {
			value: "d",
			Text: "4/15"
		},],
		nd: "",
		da: "../img/da4.png",
	},

	{
		ten: "Q5: Cho cấp số cộng (u<sub>n</sub>) có sống hạng đầu u1 = 3 và công sai d = 4. Giá trị u5 bằng",
		anh: "",
		name: "question_05",
		kq: "d",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "23",
		}, {
			value: "b",
			Text: "768"
		}, {
			value: "c",
			Text: " -13",
		}, {
			value: "d",
			Text: "19"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},

	{
		ten: "Q6: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},

	{
		ten: "Q7: Giá trị nhỏ nhất của hàm số f(x) = ⅟3x<sup>3</sup>+ x<sup>2</sup>-3x -4",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "8/3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "-4",
		}, {
			value: "d",
			Text: "-17/3"
		},],
		nd: "",
		da: "../img/da7.PNG"
	},

	{
		ten: "Q8: Cho hàm số y = f(x) có bảng biến thiên như sau:",
		anh: "../img/c8.png",
		name: "question_08",
		kq: "c",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "x = 5",
		}, {
			value: "b",
			Text: "x = 1"
		}, {
			value: "c",
			Text: "x = 3",
		}, {
			value: "d",
			Text: "x = -1"
		},],
		nd: "Chọn C" + "</br>" + "Hàm số đã cho đạt cực tiểu tại x = 3",
		da: ""
	},

	{
		ten: "Q9:Tìm tất cả các giá trị thực của tham số m  để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị. ",
		anh: "",
		name: "question_09",
		kq: "b",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "m > 2",
		}, {
			value: "b",
			Text: "m > 0"
		}, {
			value: "c",
			Text: "m ≠ 0",
		}, {
			value: "d",
			Text: "m ≥ 0"
		},],
		nd: "Chọn B" + "</br>" + "Ta có f(x) = x<sub>2</sup> - 3m" + "</br>"
			+ "Để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị thì phương trình f'(x) = 0 có hai nghiệm phân biệt <=> Δ' > 0 <=> m > 0",
		da: ""
	},

	{
		ten: "Q10:Cho hình chóp tứ giác đều có cạnh bên gấp đôi cạnh đáy. Tỉ lệ giữa diện tích xung quanh và diện tích đáy của hình chóp đã cho bằng.",
		anh: "",
		name: "question_10",
		kq: "a",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "√15",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "√3",
		}, {
			value: "d",
			Text: "4√3"
		},],
		nd: "",
		da: "../img/da10.PNG"
	},

	{
		ten: "Q11: Cho hàm số y = f(x) có đạo hàm liên tục trên R và dấu của đạo hàm cho bởi bảng dưới đây. Hàm số có mấy điểm cực trị?",
		anh: "../img/c11.png",
		name: "question_11",
		kq: "c",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "0",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "2",
		}, {
			value: "d",
			Text: "1"
		},],
		nd: "Chọn C" + "</br>" + "Từ BBT ta thấy f'(x) đổi dấu qua các giá trị x = -2, x = 1 nên hàm số đã cho có 2 điểm cực trị",
		da: ""
	},

	{
		ten: "Q12: Cho khối chóp có đáy là hình vuông cạnh a và chiều cao bằng 2a. Thể tích khối chóp đã cho bằng",
		anh: "",
		name: "question_12",
		kq: "b",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(4/3)a<sup>3</sup)",
		}, {
			value: "b",
			Text: "(2/3)a<sup>3</sup)"
		}, {
			value: "c",
			Text: "2a<sup>3</sup)",
		}, {
			value: "d",
			Text: "4a<sup>3</sup)"
		},],
		nd: "Chọn D" + "</br>" + "Thể tích khối chóp là V = 1/3.a<sup>2</sup>.2a = 2/3a<sub>3</sup>",
		da: ""
	},

	{
		ten: "Q13: Cho hàm số y = f(x)  có đồ thị như hình vẽ bên." + "</br>" + "Giá trị lớn nhất của hàm số g(x) = 2f(x) - 1 trên đoạn [-1;2] là",
		anh: "../img/c13.png",
		name: "question_13",
		kq: "b",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},

	{
		ten: "Q14: Cho khối lăng trụ đứng ABC.A'B'C' có BB' = a, đáy ABC là tam giác vuông cân tại B và AB = a. Tính thể tích V của khối lăng trụ đã cho.",
		anh: "",
		name: "question_14",
		kq: "d",
		made: "1",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},
	{
		ten: "Q15",
		anh: "../img/toan/a1d1.PNG",
		name: "question_01",
		kq: "a",
		made: "1",
		Answers: [{
			value: "a",
			Text: "6",
		}, {
			value: "b",
			Text: "8"
		}, {
			value: "c",
			Text: "4"
		}, {
			value: "d",
			Text: "2"
		},],
		da: "../img/toan/nd1.PNG",
		nd: "",

	},
	{
		ten: "Q16: Cho khối lăng trụ có diện tích đáy bằng 3a/2 và chiều cao 2a. Thể tích khối lăng trụ đã cho ",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "a<sup>3</sup>" },
			{ value: "b", Text: "6a<sup>3</sup>" },
			{ value: "c", Text: "3a<sup>3</sup>" },
			{ value: "d", Text: "2a<sup>3</sup>" }
		],
		da: "../img/toan/nd2.PNG",
		nd: ""
	},
	{
		ten: "Q17",
		anh: "../img/toan/a3d1.PNG",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "5" },
			{ value: "b", Text: "6" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd3.PNG",
		nd: ""

	},
	{
		ten: "Q18",
		anh: "../img/toan/a4d1.PNG",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "f(x)= -sinx" },
			{ value: "b", Text: "f(x) = -cos x ." },
			{ value: "c", Text: "f(x) = sinx" },
			{ value: "d", Text: "f(x) = cosx" }
		],
		da: "../img/toan/nd4.PNG",
		nd: ""

	},
	{
		ten: "Q19: Cho hàm số y = f(x) có bảng biến thiên như sau: Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
		anh: "../img/toan/a5d1.jpg",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "(0;+∞)" },
			{ value: "b", Text: "(0;1)" },
			{ value: "c", Text: "(-1;0)" },
			{ value: "d", Text: "(0;∞)" }
		],
		da: "../img/toan/nd5.PNG",
		nd: ""
	},
	{
		ten: "Q20",
		anh: "../img/toan/a6d1.PNG",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "√6" },
			{ value: "b", Text: "12" },
			{ value: "c", Text: "2√6" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd6.PNG",
		nd: ""
	},
	{
		ten: "Q20: Trong không gian Oxyz, cho điểm A(1;2;-3). Hình chiếu vuông góc của A lên mặt phẳng (Oxy) có tọa độ là ",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "(0;2;-3" },
			{ value: "b", Text: "1;0;-3" },
			{ value: "c", Text: "1;2;0" },
			{ value: "d", Text: "1;0;0" }
		],
		da: "../img/toan/nd7.PNG",
		nd: ""
	},
	{
		ten: "Q21: Cho khối chóp S.ABC có chiều cao bằng 3 , đáy ABC có diện tích bằng 10 . Thể tích khối chóp S.ABC bằng ",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "15" },
			{ value: "c", Text: "10" },
			{ value: "d", Text: "30" }
		],
		da: "../img/toan/nd8.PNG",
		nd: ""
	},
	{
		ten: "Q22: Cho cấp số nhân (u<sub>n</sub>) với u1 = 1 và u2 = 2 . Công bội của cấp số nhân đã cho là",
		name: "question_15",
		kq: "a",
		made: "1",
		Answers: [
			{ value: "a", Text: "q = 1/2" },
			{ value: "b", Text: "q = 2" },
			{ value: "c", Text: "q = -2" },
			{ value: "d", Text: "1 = -1/2" }
		],
		da: "../img/toan/nd9.PNG",
		nd: ""
	},
	{
		ten: "Q23: Cho hình trụ có chiều cao trụ đã cho bằng h = 1 và bán kính đáy r = 2 . Diện tích xung quanh của hình",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "4π" },
			{ value: "b", Text: "2π" },
			{ value: "c", Text: "3π" },
			{ value: "d", Text: "6π" }
		],
		da: "../img/toan/nd10.PNG",
		nd: ""
	},
	{
		ten: "Q24: Tiệm cân ngang của đồ thị hàm số y =  (2x-1)/(2x - 4) là đường thẳng có phương trình:",

		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "x = -2" },
			{ value: "b", Text: "x = 1" },
			{ value: "c", Text: "y = 1" },
			{ value: "d", Text: "y = -2" }
		],
		da: "../img/toan/nd11.PNG",
		nd: ""
	},

	{
		ten: "Q25: Tập nghiệm của bất phương trình log<sub>5</sub> (x + 1) > 2 là:",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "(9;+∞)" },
			{ value: "b", Text: "(25;+∞)" },
			{ value: "c", Text: "(31;+∞)" },
			{ value: "d", Text: "(24;+∞)" }
		],
		da: "../img/toan/nd12.PNG",
		nd: ""
	},
	{
		ten: "Q26: Hàm số nào dưới đây có bảng biến thiên như sau:",
		anh: "../img/toan/a13d1.PNG",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - 2x<sup>2</sup>" },
			{ value: "b", Text: "y = -x<sup>3</sup> + 3x" },
			{ value: "c", Text: "y = -x<sup>4</sup> + 2x<sup>2</sup>" },
			{ value: "d", Text: "y = x<sup>3</sup> - 3x" }
		],
		da: "../img/toan/nd13.PNG",
		nd: ""
	},
	{
		ten: "Q27: Môđun của số phức z = 3 + 4i bằng",
		name: "question_15",
		kq: "b",
		Answers: [
			{ value: "a", Text: "25" },
			{ value: "b", Text: "√7" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "7" }
		],
		da: "../img/toan/nd14.PNG",
		nd: ""
	},
	{
		ten: "Q28: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + c có đồ thị là đường cong trong hình vẽ bên. Số nghiệm của phương trình f(x) = 1 là",
		anh: "../img/toan/a15d1.PNG",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "1" },
			{ value: "b", Text: "2" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd15.PNG",
		nd: ""
	},
	{
		ten: "Q29: Tập xác định của hàm số log<sub>3</sub> (x - 4) là",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "(5;+∞)" },
			{ value: "b", Text: "(-∞;+∞)" },
			{ value: "c", Text: "(4;+∞)" },
			{ value: "d", Text: "(-∞;-4)" }
		],
		da: "../img/toan/nd16.PNG",
		nd: ""
	},
	{
		ten: "Q30: Với mọi số thực a dương tỳ ý 4 log √a bàng  ",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "-2 log a" },
			{ value: "b", Text: "2 log a " },
			{ value: "c", Text: "-4 log a " },
			{ value: "d", Text: "-8 log a " }
		],
		da: "../img/toan/nd17.PNG",
		nd: ""
	},
	{
		ten: "Q31: Số các tổ hợp chập 3 của 12 phần tử là",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "1320" },
			{ value: "b", Text: "36" },
			{ value: "c", Text: "220" },
			{ value: "d", Text: "1728" }
		],
		da: "../img/toan/nd18.PNG",
		nd: ""
	},
	{
		ten: "Q32: Cho hàm số y = f(x) có bảng biến thiên như hình vẽ . Điểm cực tiểu của hàm số đã cho là",
		anh: "../img/toan/a19d1.jpg",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "x = -2 " },
			{ value: "b", Text: "x = 2" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd19.PNG",
		nd: ""
	}, {
		ten: "Q33: Trong không gian Oxyz , phương trình mặt phẳng (Oyz) là ",
		name: "question_15",
		kq: "a",
		made: "1",
		Answers: [
			{ value: "a", Text: " z = 0 " },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: " x = 1" }
		],
		da: "../img/toan/nd20.PNG",
		nd: ""
	},
	{
		ten: "Q34: Nghiệm của phương trình 3<sup>2x+1</sup> = 3<sup>2-x</sup>",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "x = 1/3" },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1" },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd21.PNG",
		nd: ""
	},
	{
		ten: "Q35: Cho hàm số y = ax<sup>4</sup> + bx2 + c có đồ hình cong trong hình bênh . Số điểm cực trị của hàm số đã cho là :",
		anh: "../img/toan/a22d1.PNG",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "1" },
			{ value: "d", Text: "0" }
		],
		da: "../img/toan/nd22.PNG",
		nd: ""
	},
	{
		ten: "Q36:",
		anh: "../img/toan/a23d1.PNG",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "u<sub>1</sub> = (2;1;-1)" },
			{ value: "b", Text: "u<sub>2</sub> = (1;2;3)" },
			{ value: "c", Text: "u<sub>3</sub> = (1;-2;3)" },
			{ value: "d", Text: "u<sub>4</sub> = (2;1;1)" }
		],
		da: "../img/toan/nd23.PNG",

		nd: ""
	},
	{
		ten: "Q37; Cho tam giác OIM vuông tại I có OI = 3 và IM = 4 . Khi quay tam giác OIM xung quanh cạnh góc vuông OI thì đường gấp khúc OIM tạo thành hình nón có độ dài đường sinh bằng",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "4" }
		],
		da: "../img/toan/nd24.PNG",
		nd: ""
	},
	{
		ten: "Q38: Trên mặt phẳng toạ đọ , điểm biểu diễn cho số phứ z = 2 - 7i có toạ đọ là ",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "(2; 7)" },
			{ value: "b", Text: "(-2; 7)" },
			{ value: "c", Text: "2; -7)" },
			{ value: "d", Text: "(-7; 2" }
		],
		da: "../img/toan/nd25.PNG",
		nd: ""
	},
	{
		ten: "Q39: Cho 2 số phức z<sub>1</sub> = 2 +3i và z<sub>2</sub> = 1 - i . Số phức Z<sub>1</sub> + Z<sub>2</sub> bằng :",
		name: "question_15",
		kq: "a",
		made: "1",
		Answers: [
			{ value: "a", Text: "5 +i" },
			{ value: "b", Text: "3 + 2i" },
			{ value: "c", Text: "1 +4i" },
			{ value: "d", Text: "3 +4i" }
		],
		da: "../img/toan/nd26.PNG",
		nd: ""
	},
	{
		ten: "Q40: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",

		name: "question_06",
		kq: "d",
		made: "1",
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},
	{
		ten: "Q41: Đạo hàm của hàm số y = x<sup>3</sup> là:",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "y = -x<sup>-4</sup>" },
			{ value: "b", Text: "y = -1/2x<sup>-2</sup>" },
			{ value: "c", Text: "y = -1/3x<sup>-3</sup>" },
			{ value: "d", Text: "y = -3x<sup>-4</sup>" }
		],
		da: "../img/toan/nd28.PNG",
		nd: ""
	},
	{
		ten: "Q42: Trong không gian Oxyz , cho ba điểm A(1; 2; -1) , B (3; 0;1) , C (2; 2; - 2). Đường thẳng đi qua A và vuông góc với mặt phẳng ( ABC ) có phương trình là:",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "(x - 1)/1 = (y - 2)/-2 = (z + 1)/3" },
			{ value: "b", Text: "(x + 1 )/1 = (y + 1)/2 = (Z - 1)/1" },
			{ value: "c", Text: "(x 1 1 )/1 = (y - 2)/2 = (Z - 1)/-1" },
			{ value: "d", Text: "(x - 1 )/1 = (y - 2)/2 = (Z + 1)/1" }
		],
		da: "../img/toan/nd29.PNG",
		nd: ""
	},
	{
		ten: "Q43: Giá trị lớn nhất của hàm số f (x) = x<sup>3</sup> - 3x<sup>2</sup> - 9x + 10 trên đoạn [-2; 2] bằng",
		name: "question_15",
		kq: "c",
		made: "1",
		Answers: [
			{ value: "a", Text: "-12" },
			{ value: "b", Text: "10" },
			{ value: "c", Text: "15" },
			{ value: "d", Text: "-1" }
		],
		da: "../img/toan/nd30.PNG",
		nd: ""
	},
	{
		ten: "Q44: Có bao nhiêu số nguyên thuộc tập xác định của hàm số y = log [(6 - x)] (x + 2) ] ?",
		name: "question_15",
		kq: "a",
		made: "1",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "8" },
			{ value: "c", Text: "9" },
			{ value: "d", Text: "Vô số " }
		],
		da: "../img/toan/nd31.PNG",
		nd: ""
	},
	{
		ten: "Q45: Gọi  z<sub>1</sub> và z<sub>2</sub>	là hai nghiệm phức của phương trình z<sup>2</sup> + z + 6 = 0 . Khi đóz<sub>1</sub> + z<sub>2</sub> + z<sub>2</sub> z<sub>2</sub> bằng",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "5" },
			{ value: "c", Text: "-7" },
			{ value: "d", Text: "-5" }
		],
		da: "../img/toan/nd32.PNG",
		nd: ""
	},
	{
		ten: "Q46: Cho lăng trụ đứng ABC.A ' B 'C ' có đáy ABC là tam giác vuông tại B ,AC = 2, AB = √3 và AA ' = 1 (tham khảo hình vẽ bên dưới) Góc giữa hai mặt phẳng ( ABC ') và mặt phẳng ( ABC ) bằng",
		anh: "../img/toan/a32d1.png",
		name: "question_15",
		kq: "b",
		made: "1",
		Answers: [
			{ value: "a", Text: "30<sup>o</sup>" },
			{ value: "b", Text: "45<sup>o</sup>" },
			{ value: "c", Text: "90<sup>o</sup>" },
			{ value: "d", Text: "60<sup>o</sup>" }
		],
		da: "../img/toan/nd33.PNG",
		nd: ""
	},
	{
		ten: "Q47: Cho hình hộp chữ nhật  ABCD.A ' B 'C ' D ' có AB = a, BC = 2a và AA' = 3a (tham khảo hình vẽ)",
		anh: "../img/toan/a33d1.PNG",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "a" },
			{ value: "b", Text: "√2a" },
			{ value: "c", Text: "2a" },
			{ value: "d", Text: "3a" }
		],
		da: "../img/toan/nd34.PNG",
		nd: ""
	},
	{
		ten: "Q48: Có bao nhiêu giá trị nguyên dương của tham số m để hàm số y = |x<sup>4</sup> - 2mx<sup>2</sup> + x64| có bao nhiêu giá trị ba điểm cực trị ?",
		anh: "",
		name: "question_05",
		kq: "c",
		made: "1",
		Answers: [{
			value: "a",
			Text: "5",
		}, {
			value: "b",
			Text: "6"
		}, {
			value: "c",
			Text: " 12",
		}, {
			value: "d",
			Text: "11"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},
	{
		ten: "Q49: hàm số nào dưới đây đòng biến trên R?",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - x<sup>2</sup>" },
			{ value: "b", Text: "y = x<sup>3</sup> - x" },
			{ value: "c", Text: "v = (x - 1 )/((x + 2 )" },
			{ value: "d", Text: "y = x<sup>3</sup> + x" }
		],
		da: "../img/toan/nd36.PNG",
		nd: ""
	},
	{
		ten: "50: Trong không gian Oxyz , cho điểm A (0; -3; 2) và mặt phẳng (P) :2x - y + 3z + 5 = 0 . Mặt phẳng đi qua A và song song với (P) có phương trình là",
		name: "question_15",
		kq: "d",
		made: "1",
		Answers: [
			{ value: "a", Text: "2x - y + 3z + 9 = 0 " },
			{ value: "b", Text: "2x + y + 3z - 3 = 0 " },
			{ value: "c", Text: "2x + y + 3z + 3 = 0" },
			{ value: "d", Text: "2x - y + 3z - 9 = 0" }
		],
		da: "../img/toan/nd37.PNG",
		nd: ""
	},
	{
		anh: "../img/c1.png",
		ten: "Q1",
		name: "question_01",
		made: "2",
		kq: "a",
		cb: 1,
		Answers: [{
			value: "a",
			//	Text : "y = x<sup>3</sup> - 3x +1",
			question1: "../img/testly.png",
		}, {
			value: "b",
			Text: "y = -x<sup>3</sup> + 3x +1"
		}, {
			value: "c",
			Text: "y = -x<sup>3</sup> - 3x -1"
		}, {
			value: "d",
			Text: "y = x<sup>3</sup> - 3x -1"
		},],
		nd: "Từ đồ thị ta thấy hệ số a>0 do nhánh phải hướng lên trên. Do đó loại B và C Mặt khác đồ thị cắt trục tung tại A(0;1).Do đó chọn A",
	},

	{
		ten: "Q2: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + d có đồ thị là đường  cong trong hình bên. Dấu của các hệ số thực a, b, c là",
		anh: "../img/testly.png",
		name: "question_01",
		made: "2",
		kq: "c",
		cb: 1,
		Answers: [{
			value: "a",
			//Text : "a<0, b>0, c<0",
			question1: "../img/test.PNG",
		}, {
			value: "b",
			Text: "a>0, b>0, c>0"
		}, {
			value: "c",
			Text: "a>0, b<0, c>0"
		}, {
			value: "d",
			Text: "a>0, b<0, c<0"
		},],
		nd: "Ta có đồ thị có hình dạng như trên với hàm bậc bốn trùng phương có hai điểm cực tiểu và một điểm cực đại nên a > 0, b < 0 . Giá trị cực đại lớn hơn 0 nên c > 0."
	},

	{
		ten: "Q3: Cho hình chóp S.ABC có đáy ABC là tam giác đều và SA vuông góc với đáy, AB = a. Khoảng cách từ C đến mặt phẳng (SAB) bằng",
		anh: "",
		name: "question_03",
		kq: "c",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "a căn 2 chia 2",
		}, {
			value: "b",
			Text: "a"
		}, {
			value: "c",
			Text: " a căn 3 chia 2",
		}, {
			value: "d",
			Text: "a chia c"
		},],
		nd: "",
		da: "../img/da3.png",
	},

	{
		ten: "Q4: Chọn ngẫu nhiên hai số trong 15 số nguyên dương đầu tiên. Xác suất chọn được hai số chẵn bằng",
		anh: "",
		name: "question_04",
		kq: "b",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "11/5",
		}, {
			value: "b",
			Text: "1/5"
		}, {
			value: "c",
			Text: " 5/4",
		}, {
			value: "d",
			Text: "4/15"
		},],
		nd: "",
		da: "../img/da4.png",
	},

	{
		ten: "Q5: Cho cấp số cộng (u<sub>n</sub>) có sống hạng đầu u1 = 3 và công sai d = 4. Giá trị u5 bằng",
		anh: "",
		name: "question_05",
		kq: "d",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "23",
		}, {
			value: "b",
			Text: "768"
		}, {
			value: "c",
			Text: " -13",
		}, {
			value: "d",
			Text: "19"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},

	{
		ten: "Q6: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},

	{
		ten: "Q7: Giá trị nhỏ nhất của hàm số f(x) = ⅟3x<sup>3</sup>+ x<sup>2</sup>-3x -4",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "8/3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "-4",
		}, {
			value: "d",
			Text: "-17/3"
		},],
		nd: "",
		da: "../img/da7.PNG"
	},

	{
		ten: "Q8: Cho hàm số y = f(x) có bảng biến thiên như sau:",
		anh: "../img/c8.png",
		name: "question_08",
		kq: "c",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "x = 5",
		}, {
			value: "b",
			Text: "x = 1"
		}, {
			value: "c",
			Text: "x = 3",
		}, {
			value: "d",
			Text: "x = -1"
		},],
		nd: "Chọn C" + "</br>" + "Hàm số đã cho đạt cực tiểu tại x = 3",
		da: ""
	},

	{
		ten: "Q9:Tìm tất cả các giá trị thực của tham số m  để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị. ",
		anh: "",
		name: "question_09",
		kq: "b",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "m > 2",
		}, {
			value: "b",
			Text: "m > 0"
		}, {
			value: "c",
			Text: "m ≠ 0",
		}, {
			value: "d",
			Text: "m ≥ 0"
		},],
		nd: "Chọn B" + "</br>" + "Ta có f(x) = x<sub>2</sup> - 3m" + "</br>"
			+ "Để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị thì phương trình f'(x) = 0 có hai nghiệm phân biệt <=> Δ' > 0 <=> m > 0",
		da: ""
	},

	{
		ten: "Q10:Cho hình chóp tứ giác đều có cạnh bên gấp đôi cạnh đáy. Tỉ lệ giữa diện tích xung quanh và diện tích đáy của hình chóp đã cho bằng.",
		anh: "",
		name: "question_10",
		kq: "a",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "√15",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "√3",
		}, {
			value: "d",
			Text: "4√3"
		},],
		nd: "",
		da: "../img/da10.PNG"
	},

	{
		ten: "Q11: Cho hàm số y = f(x) có đạo hàm liên tục trên R và dấu của đạo hàm cho bởi bảng dưới đây. Hàm số có mấy điểm cực trị?",
		anh: "../img/c11.png",
		name: "question_11",
		kq: "c",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "0",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "2",
		}, {
			value: "d",
			Text: "1"
		},],
		nd: "Chọn C" + "</br>" + "Từ BBT ta thấy f'(x) đổi dấu qua các giá trị x = -2, x = 1 nên hàm số đã cho có 2 điểm cực trị",
		da: ""
	},

	{
		ten: "Q12: Cho khối chóp có đáy là hình vuông cạnh a và chiều cao bằng 2a. Thể tích khối chóp đã cho bằng",
		anh: "",
		name: "question_12",
		kq: "b",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(4/3)a<sup>3</sup)",
		}, {
			value: "b",
			Text: "(2/3)a<sup>3</sup)"
		}, {
			value: "c",
			Text: "2a<sup>3</sup)",
		}, {
			value: "d",
			Text: "4a<sup>3</sup)"
		},],
		nd: "Chọn D" + "</br>" + "Thể tích khối chóp là V = 1/3.a<sup>2</sup>.2a = 2/3a<sub>3</sup>",
		da: ""
	},

	{
		ten: "Q13: Cho hàm số y = f(x)  có đồ thị như hình vẽ bên." + "</br>" + "Giá trị lớn nhất của hàm số g(x) = 2f(x) - 1 trên đoạn [-1;2] là",
		anh: "../img/c13.png",
		name: "question_13",
		kq: "b",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},

	{
		ten: "Q14: Cho khối lăng trụ đứng ABC.A'B'C' có BB' = a, đáy ABC là tam giác vuông cân tại B và AB = a. Tính thể tích V của khối lăng trụ đã cho.",
		anh: "",
		name: "question_14",
		kq: "d",
		made: "2",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},
	{
		ten: "Q15",
		anh: "../img/toan/a1d1.PNG",
		name: "question_01",
		kq: "a",
		made: "2",
		Answers: [{
			value: "a",
			Text: "6",
		}, {
			value: "b",
			Text: "8"
		}, {
			value: "c",
			Text: "4"
		}, {
			value: "d",
			Text: "2"
		},],
		da: "../img/toan/nd1.PNG",
		nd: "",

	},
	{
		ten: "Q16: Cho khối lăng trụ có diện tích đáy bằng 3a/2 và chiều cao 2a. Thể tích khối lăng trụ đã cho ",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "a<sup>3</sup>" },
			{ value: "b", Text: "6a<sup>3</sup>" },
			{ value: "c", Text: "3a<sup>3</sup>" },
			{ value: "d", Text: "2a<sup>3</sup>" }
		],
		da: "../img/toan/nd2.PNG",
		nd: ""
	},
	{
		ten: "Q17",
		anh: "../img/toan/a3d1.PNG",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "5" },
			{ value: "b", Text: "6" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd3.PNG",
		nd: ""

	},
	{
		ten: "Q18",
		anh: "../img/toan/a4d1.PNG",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "f(x)= -sinx" },
			{ value: "b", Text: "f(x) = -cos x ." },
			{ value: "c", Text: "f(x) = sinx" },
			{ value: "d", Text: "f(x) = cosx" }
		],
		da: "../img/toan/nd4.PNG",
		nd: ""

	},
	{
		ten: "Q19: Cho hàm số y = f(x) có bảng biến thiên như sau: Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
		anh: "../img/toan/a5d1.jpg",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "(0;+∞)" },
			{ value: "b", Text: "(0;1)" },
			{ value: "c", Text: "(-1;0)" },
			{ value: "d", Text: "(0;∞)" }
		],
		da: "../img/toan/nd5.PNG",
		nd: ""
	},
	{
		ten: "Q20",
		anh: "../img/toan/a6d1.PNG",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "√6" },
			{ value: "b", Text: "12" },
			{ value: "c", Text: "2√6" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd6.PNG",
		nd: ""
	},
	{
		ten: "Q20: Trong không gian Oxyz, cho điểm A(1;2;-3). Hình chiếu vuông góc của A lên mặt phẳng (Oxy) có tọa độ là ",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "(0;2;-3" },
			{ value: "b", Text: "1;0;-3" },
			{ value: "c", Text: "1;2;0" },
			{ value: "d", Text: "1;0;0" }
		],
		da: "../img/toan/nd7.PNG",
		nd: ""
	},
	{
		ten: "Q21: Cho khối chóp S.ABC có chiều cao bằng 3 , đáy ABC có diện tích bằng 10 . Thể tích khối chóp S.ABC bằng ",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "15" },
			{ value: "c", Text: "10" },
			{ value: "d", Text: "30" }
		],
		da: "../img/toan/nd8.PNG",
		nd: ""
	},
	{
		ten: "Q22: Cho cấp số nhân (u<sub>n</sub>) với u1 = 1 và u2 = 2 . Công bội của cấp số nhân đã cho là",
		name: "question_15",
		kq: "a",
		made: "2",
		Answers: [
			{ value: "a", Text: "q = 1/2" },
			{ value: "b", Text: "q = 2" },
			{ value: "c", Text: "q = -2" },
			{ value: "d", Text: "1 = -1/2" }
		],
		da: "../img/toan/nd9.PNG",
		nd: ""
	},
	{
		ten: "Q23: Cho hình trụ có chiều cao trụ đã cho bằng h = 1 và bán kính đáy r = 2 . Diện tích xung quanh của hình",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "4π" },
			{ value: "b", Text: "2π" },
			{ value: "c", Text: "3π" },
			{ value: "d", Text: "6π" }
		],
		da: "../img/toan/nd10.PNG",
		nd: ""
	},
	{
		ten: "Q24: Tiệm cân ngang của đồ thị hàm số y =  (2x-1)/(2x - 4) là đường thẳng có phương trình:",

		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "x = -2" },
			{ value: "b", Text: "x = 1" },
			{ value: "c", Text: "y = 1" },
			{ value: "d", Text: "y = -2" }
		],
		da: "../img/toan/nd11.PNG",
		nd: ""
	},

	{
		ten: "Q25: Tập nghiệm của bất phương trình log<sub>5</sub> (x + 1) > 2 là:",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "(9;+∞)" },
			{ value: "b", Text: "(25;+∞)" },
			{ value: "c", Text: "(31;+∞)" },
			{ value: "d", Text: "(24;+∞)" }
		],
		da: "../img/toan/nd12.PNG",
		nd: ""
	},
	{
		ten: "Q26: Hàm số nào dưới đây có bảng biến thiên như sau:",
		anh: "../img/toan/a13d1.PNG",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - 2x<sup>2</sup>" },
			{ value: "b", Text: "y = -x<sup>3</sup> + 3x" },
			{ value: "c", Text: "y = -x<sup>4</sup> + 2x<sup>2</sup>" },
			{ value: "d", Text: "y = x<sup>3</sup> - 3x" }
		],
		da: "../img/toan/nd13.PNG",
		nd: ""
	},
	{
		ten: "Q27: Môđun của số phức z = 3 + 4i bằng",
		name: "question_15",
		kq: "b",
		Answers: [
			{ value: "a", Text: "25" },
			{ value: "b", Text: "√7" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "7" }
		],
		da: "../img/toan/nd14.PNG",
		nd: ""
	},
	{
		ten: "Q28: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + c có đồ thị là đường cong trong hình vẽ bên. Số nghiệm của phương trình f(x) = 1 là",
		anh: "../img/toan/a15d1.PNG",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "1" },
			{ value: "b", Text: "2" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd15.PNG",
		nd: ""
	},
	{
		ten: "Q29: Tập xác định của hàm số log<sub>3</sub> (x - 4) là",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "(5;+∞)" },
			{ value: "b", Text: "(-∞;+∞)" },
			{ value: "c", Text: "(4;+∞)" },
			{ value: "d", Text: "(-∞;-4)" }
		],
		da: "../img/toan/nd16.PNG",
		nd: ""
	},
	{
		ten: "Q30: Với mọi số thực a dương tỳ ý 4 log √a bàng  ",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "-2 log a" },
			{ value: "b", Text: "2 log a " },
			{ value: "c", Text: "-4 log a " },
			{ value: "d", Text: "-8 log a " }
		],
		da: "../img/toan/nd17.PNG",
		nd: ""
	},
	{
		ten: "Q31: Số các tổ hợp chập 3 của 12 phần tử là",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "1320" },
			{ value: "b", Text: "36" },
			{ value: "c", Text: "220" },
			{ value: "d", Text: "1728" }
		],
		da: "../img/toan/nd18.PNG",
		nd: ""
	},
	{
		ten: "Q32: Cho hàm số y = f(x) có bảng biến thiên như hình vẽ . Điểm cực tiểu của hàm số đã cho là",
		anh: "../img/toan/a19d1.jpg",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "x = -2 " },
			{ value: "b", Text: "x = 2" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd19.PNG",
		nd: ""
	}, {
		ten: "Q33: Trong không gian Oxyz , phương trình mặt phẳng (Oyz) là ",
		name: "question_15",
		kq: "a",
		made: "2",
		Answers: [
			{ value: "a", Text: " z = 0 " },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: " x = 1" }
		],
		da: "../img/toan/nd20.PNG",
		nd: ""
	},
	{
		ten: "Q34: Nghiệm của phương trình 3<sup>2x+1</sup> = 3<sup>2-x</sup>",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "x = 1/3" },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1" },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd21.PNG",
		nd: ""
	},
	{
		ten: "Q35: Cho hàm số y = ax<sup>4</sup> + bx2 + c có đồ hình cong trong hình bênh . Số điểm cực trị của hàm số đã cho là :",
		anh: "../img/toan/a22d1.PNG",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "1" },
			{ value: "d", Text: "0" }
		],
		da: "../img/toan/nd22.PNG",
		nd: ""
	},
	{
		ten: "Q36:",
		anh: "../img/toan/a23d1.PNG",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "u<sub>1</sub> = (2;1;-1)" },
			{ value: "b", Text: "u<sub>2</sub> = (1;2;3)" },
			{ value: "c", Text: "u<sub>3</sub> = (1;-2;3)" },
			{ value: "d", Text: "u<sub>4</sub> = (2;1;1)" }
		],
		da: "../img/toan/nd23.PNG",

		nd: ""
	},
	{
		ten: "Q37; Cho tam giác OIM vuông tại I có OI = 3 và IM = 4 . Khi quay tam giác OIM xung quanh cạnh góc vuông OI thì đường gấp khúc OIM tạo thành hình nón có độ dài đường sinh bằng",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "4" }
		],
		da: "../img/toan/nd24.PNG",
		nd: ""
	},
	{
		ten: "Q38: Trên mặt phẳng toạ đọ , điểm biểu diễn cho số phứ z = 2 - 7i có toạ đọ là ",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "(2; 7)" },
			{ value: "b", Text: "(-2; 7)" },
			{ value: "c", Text: "2; -7)" },
			{ value: "d", Text: "(-7; 2" }
		],
		da: "../img/toan/nd25.PNG",
		nd: ""
	},
	{
		ten: "Q39: Cho 2 số phức z<sub>1</sub> = 2 +3i và z<sub>2</sub> = 1 - i . Số phức Z<sub>1</sub> + Z<sub>2</sub> bằng :",
		name: "question_15",
		kq: "a",
		made: "2",
		Answers: [
			{ value: "a", Text: "5 +i" },
			{ value: "b", Text: "3 + 2i" },
			{ value: "c", Text: "1 +4i" },
			{ value: "d", Text: "3 +4i" }
		],
		da: "../img/toan/nd26.PNG",
		nd: ""
	},
	{
		ten: "Q40: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",

		name: "question_06",
		kq: "d",
		made: "2",
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},
	{
		ten: "Q41: Đạo hàm của hàm số y = x<sup>3</sup> là:",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "y = -x<sup>-4</sup>" },
			{ value: "b", Text: "y = -1/2x<sup>-2</sup>" },
			{ value: "c", Text: "y = -1/3x<sup>-3</sup>" },
			{ value: "d", Text: "y = -3x<sup>-4</sup>" }
		],
		da: "../img/toan/nd28.PNG",
		nd: ""
	},
	{
		ten: "Q42: Trong không gian Oxyz , cho ba điểm A(1; 2; -1) , B (3; 0;1) , C (2; 2; - 2). Đường thẳng đi qua A và vuông góc với mặt phẳng ( ABC ) có phương trình là:",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "(x - 1)/1 = (y - 2)/-2 = (z + 1)/3" },
			{ value: "b", Text: "(x + 1 )/1 = (y + 1)/2 = (Z - 1)/1" },
			{ value: "c", Text: "(x 1 1 )/1 = (y - 2)/2 = (Z - 1)/-1" },
			{ value: "d", Text: "(x - 1 )/1 = (y - 2)/2 = (Z + 1)/1" }
		],
		da: "../img/toan/nd29.PNG",
		nd: ""
	},
	{
		ten: "Q43: Giá trị lớn nhất của hàm số f (x) = x<sup>3</sup> - 3x<sup>2</sup> - 9x + 10 trên đoạn [-2; 2] bằng",
		name: "question_15",
		kq: "c",
		made: "2",
		Answers: [
			{ value: "a", Text: "-12" },
			{ value: "b", Text: "10" },
			{ value: "c", Text: "15" },
			{ value: "d", Text: "-1" }
		],
		da: "../img/toan/nd30.PNG",
		nd: ""
	},
	{
		ten: "Q44: Có bao nhiêu số nguyên thuộc tập xác định của hàm số y = log [(6 - x)] (x + 2) ] ?",
		name: "question_15",
		kq: "a",
		made: "2",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "8" },
			{ value: "c", Text: "9" },
			{ value: "d", Text: "Vô số " }
		],
		da: "../img/toan/nd31.PNG",
		nd: ""
	},
	{
		ten: "Q45: Gọi  z<sub>1</sub> và z<sub>2</sub>	là hai nghiệm phức của phương trình z<sup>2</sup> + z + 6 = 0 . Khi đóz<sub>1</sub> + z<sub>2</sub> + z<sub>2</sub> z<sub>2</sub> bằng",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "5" },
			{ value: "c", Text: "-7" },
			{ value: "d", Text: "-5" }
		],
		da: "../img/toan/nd32.PNG",
		nd: ""
	},
	{
		ten: "Q46: Cho lăng trụ đứng ABC.A ' B 'C ' có đáy ABC là tam giác vuông tại B ,AC = 2, AB = √3 và AA ' = 1 (tham khảo hình vẽ bên dưới) Góc giữa hai mặt phẳng ( ABC ') và mặt phẳng ( ABC ) bằng",
		anh: "../img/toan/a32d1.png",
		name: "question_15",
		kq: "b",
		made: "2",
		Answers: [
			{ value: "a", Text: "30<sup>o</sup>" },
			{ value: "b", Text: "45<sup>o</sup>" },
			{ value: "c", Text: "90<sup>o</sup>" },
			{ value: "d", Text: "60<sup>o</sup>" }
		],
		da: "../img/toan/nd33.PNG",
		nd: ""
	},
	{
		ten: "Q47: Cho hình hộp chữ nhật  ABCD.A ' B 'C ' D ' có AB = a, BC = 2a và AA' = 3a (tham khảo hình vẽ)",
		anh: "../img/toan/a33d1.PNG",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "a" },
			{ value: "b", Text: "√2a" },
			{ value: "c", Text: "2a" },
			{ value: "d", Text: "3a" }
		],
		da: "../img/toan/nd34.PNG",
		nd: ""
	},
	{
		ten: "Q48: Có bao nhiêu giá trị nguyên dương của tham số m để hàm số y = |x<sup>4</sup> - 2mx<sup>2</sup> + x64| có bao nhiêu giá trị ba điểm cực trị ?",
		anh: "",
		name: "question_05",
		kq: "c",
		made: "2",
		Answers: [{
			value: "a",
			Text: "5",
		}, {
			value: "b",
			Text: "6"
		}, {
			value: "c",
			Text: " 12",
		}, {
			value: "d",
			Text: "11"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},
	{
		ten: "Q49: hàm số nào dưới đây đòng biến trên R?",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - x<sup>2</sup>" },
			{ value: "b", Text: "y = x<sup>3</sup> - x" },
			{ value: "c", Text: "v = (x - 1 )/((x + 2 )" },
			{ value: "d", Text: "y = x<sup>3</sup> + x" }
		],
		da: "../img/toan/nd36.PNG",
		nd: ""
	},
	{
		ten: "50: Trong không gian Oxyz , cho điểm A (0; -3; 2) và mặt phẳng (P) :2x - y + 3z + 5 = 0 . Mặt phẳng đi qua A và song song với (P) có phương trình là",
		name: "question_15",
		kq: "d",
		made: "2",
		Answers: [
			{ value: "a", Text: "2x - y + 3z + 9 = 0 " },
			{ value: "b", Text: "2x + y + 3z - 3 = 0 " },
			{ value: "c", Text: "2x + y + 3z + 3 = 0" },
			{ value: "d", Text: "2x - y + 3z - 9 = 0" }
		],
		da: "../img/toan/nd37.PNG",
		nd: ""
	},
	{
		anh: "../img/c1.png",
		ten: "Q1",
		name: "question_01",
		made: "3",
		kq: "a",
		cb: 1,
		Answers: [{
			value: "a",
			//	Text : "y = x<sup>3</sup> - 3x +1",
			question1: "../img/testly.png",
		}, {
			value: "b",
			Text: "y = -x<sup>3</sup> + 3x +1"
		}, {
			value: "c",
			Text: "y = -x<sup>3</sup> - 3x -1"
		}, {
			value: "d",
			Text: "y = x<sup>3</sup> - 3x -1"
		},],
		nd: "Từ đồ thị ta thấy hệ số a>0 do nhánh phải hướng lên trên. Do đó loại B và C Mặt khác đồ thị cắt trục tung tại A(0;1).Do đó chọn A",
	},

	{
		ten: "Q2: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + d có đồ thị là đường  cong trong hình bên. Dấu của các hệ số thực a, b, c là",
		anh: "../img/testly.png",
		name: "question_01",
		made: "3",
		kq: "c",
		cb: 1,
		Answers: [{
			value: "a",
			//Text : "a<0, b>0, c<0",
			question1: "../img/test.PNG",
		}, {
			value: "b",
			Text: "a>0, b>0, c>0"
		}, {
			value: "c",
			Text: "a>0, b<0, c>0"
		}, {
			value: "d",
			Text: "a>0, b<0, c<0"
		},],
		nd: "Ta có đồ thị có hình dạng như trên với hàm bậc bốn trùng phương có hai điểm cực tiểu và một điểm cực đại nên a > 0, b < 0 . Giá trị cực đại lớn hơn 0 nên c > 0."
	},

	{
		ten: "Q3: Cho hình chóp S.ABC có đáy ABC là tam giác đều và SA vuông góc với đáy, AB = a. Khoảng cách từ C đến mặt phẳng (SAB) bằng",
		anh: "",
		name: "question_03",
		kq: "c",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "a căn 2 chia 2",
		}, {
			value: "b",
			Text: "a"
		}, {
			value: "c",
			Text: " a căn 3 chia 2",
		}, {
			value: "d",
			Text: "a chia c"
		},],
		nd: "",
		da: "../img/da3.png",
	},

	{
		ten: "Q4: Chọn ngẫu nhiên hai số trong 15 số nguyên dương đầu tiên. Xác suất chọn được hai số chẵn bằng",
		anh: "",
		name: "question_04",
		kq: "b",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "11/5",
		}, {
			value: "b",
			Text: "1/5"
		}, {
			value: "c",
			Text: " 5/4",
		}, {
			value: "d",
			Text: "4/15"
		},],
		nd: "",
		da: "../img/da4.png",
	},

	{
		ten: "Q5: Cho cấp số cộng (u<sub>n</sub>) có sống hạng đầu u1 = 3 và công sai d = 4. Giá trị u5 bằng",
		anh: "",
		name: "question_05",
		kq: "d",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "23",
		}, {
			value: "b",
			Text: "768"
		}, {
			value: "c",
			Text: " -13",
		}, {
			value: "d",
			Text: "19"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},

	{
		ten: "Q6: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},

	{
		ten: "Q7: Giá trị nhỏ nhất của hàm số f(x) = ⅟3x<sup>3</sup>+ x<sup>2</sup>-3x -4",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "8/3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "-4",
		}, {
			value: "d",
			Text: "-17/3"
		},],
		nd: "",
		da: "../img/da7.PNG"
	},

	{
		ten: "Q8: Cho hàm số y = f(x) có bảng biến thiên như sau:",
		anh: "../img/c8.png",
		name: "question_08",
		kq: "c",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "x = 5",
		}, {
			value: "b",
			Text: "x = 1"
		}, {
			value: "c",
			Text: "x = 3",
		}, {
			value: "d",
			Text: "x = -1"
		},],
		nd: "Chọn C" + "</br>" + "Hàm số đã cho đạt cực tiểu tại x = 3",
		da: ""
	},

	{
		ten: "Q9:Tìm tất cả các giá trị thực của tham số m  để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị. ",
		anh: "",
		name: "question_09",
		kq: "b",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "m > 2",
		}, {
			value: "b",
			Text: "m > 0"
		}, {
			value: "c",
			Text: "m ≠ 0",
		}, {
			value: "d",
			Text: "m ≥ 0"
		},],
		nd: "Chọn B" + "</br>" + "Ta có f(x) = x<sub>2</sup> - 3m" + "</br>"
			+ "Để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị thì phương trình f'(x) = 0 có hai nghiệm phân biệt <=> Δ' > 0 <=> m > 0",
		da: ""
	},

	{
		ten: "Q10:Cho hình chóp tứ giác đều có cạnh bên gấp đôi cạnh đáy. Tỉ lệ giữa diện tích xung quanh và diện tích đáy của hình chóp đã cho bằng.",
		anh: "",
		name: "question_10",
		kq: "a",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "√15",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "√3",
		}, {
			value: "d",
			Text: "4√3"
		},],
		nd: "",
		da: "../img/da10.PNG"
	},

	{
		ten: "Q11: Cho hàm số y = f(x) có đạo hàm liên tục trên R và dấu của đạo hàm cho bởi bảng dưới đây. Hàm số có mấy điểm cực trị?",
		anh: "../img/c11.png",
		name: "question_11",
		kq: "c",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "0",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "2",
		}, {
			value: "d",
			Text: "1"
		},],
		nd: "Chọn C" + "</br>" + "Từ BBT ta thấy f'(x) đổi dấu qua các giá trị x = -2, x = 1 nên hàm số đã cho có 2 điểm cực trị",
		da: ""
	},

	{
		ten: "Q12: Cho khối chóp có đáy là hình vuông cạnh a và chiều cao bằng 2a. Thể tích khối chóp đã cho bằng",
		anh: "",
		name: "question_12",
		kq: "b",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(4/3)a<sup>3</sup)",
		}, {
			value: "b",
			Text: "(2/3)a<sup>3</sup)"
		}, {
			value: "c",
			Text: "2a<sup>3</sup)",
		}, {
			value: "d",
			Text: "4a<sup>3</sup)"
		},],
		nd: "Chọn D" + "</br>" + "Thể tích khối chóp là V = 1/3.a<sup>2</sup>.2a = 2/3a<sub>3</sup>",
		da: ""
	},

	{
		ten: "Q13: Cho hàm số y = f(x)  có đồ thị như hình vẽ bên." + "</br>" + "Giá trị lớn nhất của hàm số g(x) = 2f(x) - 1 trên đoạn [-1;2] là",
		anh: "../img/c13.png",
		name: "question_13",
		kq: "b",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},

	{
		ten: "Q14: Cho khối lăng trụ đứng ABC.A'B'C' có BB' = a, đáy ABC là tam giác vuông cân tại B và AB = a. Tính thể tích V của khối lăng trụ đã cho.",
		anh: "",
		name: "question_14",
		kq: "d",
		made: "3",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},
	{
		ten: "Q15",
		anh: "../img/toan/a1d1.PNG",
		name: "question_01",
		kq: "a",
		made: "3",
		Answers: [{
			value: "a",
			Text: "6",
		}, {
			value: "b",
			Text: "8"
		}, {
			value: "c",
			Text: "4"
		}, {
			value: "d",
			Text: "2"
		},],
		da: "../img/toan/nd1.PNG",
		nd: "",

	},
	{
		ten: "Q16: Cho khối lăng trụ có diện tích đáy bằng 3a/2 và chiều cao 2a. Thể tích khối lăng trụ đã cho ",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "a<sup>3</sup>" },
			{ value: "b", Text: "6a<sup>3</sup>" },
			{ value: "c", Text: "3a<sup>3</sup>" },
			{ value: "d", Text: "2a<sup>3</sup>" }
		],
		da: "../img/toan/nd2.PNG",
		nd: ""
	},
	{
		ten: "Q17",
		anh: "../img/toan/a3d1.PNG",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "5" },
			{ value: "b", Text: "6" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd3.PNG",
		nd: ""

	},
	{
		ten: "Q18",
		anh: "../img/toan/a4d1.PNG",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "f(x)= -sinx" },
			{ value: "b", Text: "f(x) = -cos x ." },
			{ value: "c", Text: "f(x) = sinx" },
			{ value: "d", Text: "f(x) = cosx" }
		],
		da: "../img/toan/nd4.PNG",
		nd: ""

	},
	{
		ten: "Q19: Cho hàm số y = f(x) có bảng biến thiên như sau: Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
		anh: "../img/toan/a5d1.jpg",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "(0;+∞)" },
			{ value: "b", Text: "(0;1)" },
			{ value: "c", Text: "(-1;0)" },
			{ value: "d", Text: "(0;∞)" }
		],
		da: "../img/toan/nd5.PNG",
		nd: ""
	},
	{
		ten: "Q20",
		anh: "../img/toan/a6d1.PNG",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "√6" },
			{ value: "b", Text: "12" },
			{ value: "c", Text: "2√6" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd6.PNG",
		nd: ""
	},
	{
		ten: "Q20: Trong không gian Oxyz, cho điểm A(1;2;-3). Hình chiếu vuông góc của A lên mặt phẳng (Oxy) có tọa độ là ",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "(0;2;-3" },
			{ value: "b", Text: "1;0;-3" },
			{ value: "c", Text: "1;2;0" },
			{ value: "d", Text: "1;0;0" }
		],
		da: "../img/toan/nd7.PNG",
		nd: ""
	},
	{
		ten: "Q21: Cho khối chóp S.ABC có chiều cao bằng 3 , đáy ABC có diện tích bằng 10 . Thể tích khối chóp S.ABC bằng ",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "15" },
			{ value: "c", Text: "10" },
			{ value: "d", Text: "30" }
		],
		da: "../img/toan/nd8.PNG",
		nd: ""
	},
	{
		ten: "Q22: Cho cấp số nhân (u<sub>n</sub>) với u1 = 1 và u2 = 2 . Công bội của cấp số nhân đã cho là",
		name: "question_15",
		kq: "a",
		made: "3",
		Answers: [
			{ value: "a", Text: "q = 1/2" },
			{ value: "b", Text: "q = 2" },
			{ value: "c", Text: "q = -2" },
			{ value: "d", Text: "1 = -1/2" }
		],
		da: "../img/toan/nd9.PNG",
		nd: ""
	},
	{
		ten: "Q23: Cho hình trụ có chiều cao trụ đã cho bằng h = 1 và bán kính đáy r = 2 . Diện tích xung quanh của hình",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "4π" },
			{ value: "b", Text: "2π" },
			{ value: "c", Text: "3π" },
			{ value: "d", Text: "6π" }
		],
		da: "../img/toan/nd10.PNG",
		nd: ""
	},
	{
		ten: "Q24: Tiệm cân ngang của đồ thị hàm số y =  (2x-1)/(2x - 4) là đường thẳng có phương trình:",

		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "x = -2" },
			{ value: "b", Text: "x = 1" },
			{ value: "c", Text: "y = 1" },
			{ value: "d", Text: "y = -2" }
		],
		da: "../img/toan/nd11.PNG",
		nd: ""
	},

	{
		ten: "Q25: Tập nghiệm của bất phương trình log<sub>5</sub> (x + 1) > 2 là:",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "(9;+∞)" },
			{ value: "b", Text: "(25;+∞)" },
			{ value: "c", Text: "(31;+∞)" },
			{ value: "d", Text: "(24;+∞)" }
		],
		da: "../img/toan/nd12.PNG",
		nd: ""
	},
	{
		ten: "Q26: Hàm số nào dưới đây có bảng biến thiên như sau:",
		anh: "../img/toan/a13d1.PNG",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - 2x<sup>2</sup>" },
			{ value: "b", Text: "y = -x<sup>3</sup> + 3x" },
			{ value: "c", Text: "y = -x<sup>4</sup> + 2x<sup>2</sup>" },
			{ value: "d", Text: "y = x<sup>3</sup> - 3x" }
		],
		da: "../img/toan/nd13.PNG",
		nd: ""
	},
	{
		ten: "Q27: Môđun của số phức z = 3 + 4i bằng",
		name: "question_15",
		kq: "b",
		Answers: [
			{ value: "a", Text: "25" },
			{ value: "b", Text: "√7" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "7" }
		],
		da: "../img/toan/nd14.PNG",
		nd: ""
	},
	{
		ten: "Q28: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + c có đồ thị là đường cong trong hình vẽ bên. Số nghiệm của phương trình f(x) = 1 là",
		anh: "../img/toan/a15d1.PNG",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "1" },
			{ value: "b", Text: "2" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd15.PNG",
		nd: ""
	},
	{
		ten: "Q29: Tập xác định của hàm số log<sub>3</sub> (x - 4) là",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "(5;+∞)" },
			{ value: "b", Text: "(-∞;+∞)" },
			{ value: "c", Text: "(4;+∞)" },
			{ value: "d", Text: "(-∞;-4)" }
		],
		da: "../img/toan/nd16.PNG",
		nd: ""
	},
	{
		ten: "Q30: Với mọi số thực a dương tỳ ý 4 log √a bàng  ",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "-2 log a" },
			{ value: "b", Text: "2 log a " },
			{ value: "c", Text: "-4 log a " },
			{ value: "d", Text: "-8 log a " }
		],
		da: "../img/toan/nd17.PNG",
		nd: ""
	},
	{
		ten: "Q31: Số các tổ hợp chập 3 của 12 phần tử là",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "1320" },
			{ value: "b", Text: "36" },
			{ value: "c", Text: "220" },
			{ value: "d", Text: "1728" }
		],
		da: "../img/toan/nd18.PNG",
		nd: ""
	},
	{
		ten: "Q32: Cho hàm số y = f(x) có bảng biến thiên như hình vẽ . Điểm cực tiểu của hàm số đã cho là",
		anh: "../img/toan/a19d1.jpg",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "x = -2 " },
			{ value: "b", Text: "x = 2" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd19.PNG",
		nd: ""
	}, {
		ten: "Q33: Trong không gian Oxyz , phương trình mặt phẳng (Oyz) là ",
		name: "question_15",
		kq: "a",
		made: "3",
		Answers: [
			{ value: "a", Text: " z = 0 " },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: " x = 1" }
		],
		da: "../img/toan/nd20.PNG",
		nd: ""
	},
	{
		ten: "Q34: Nghiệm của phương trình 3<sup>2x+1</sup> = 3<sup>2-x</sup>",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "x = 1/3" },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1" },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd21.PNG",
		nd: ""
	},
	{
		ten: "Q35: Cho hàm số y = ax<sup>4</sup> + bx2 + c có đồ hình cong trong hình bênh . Số điểm cực trị của hàm số đã cho là :",
		anh: "../img/toan/a22d1.PNG",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "1" },
			{ value: "d", Text: "0" }
		],
		da: "../img/toan/nd22.PNG",
		nd: ""
	},
	{
		ten: "Q36:",
		anh: "../img/toan/a23d1.PNG",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "u<sub>1</sub> = (2;1;-1)" },
			{ value: "b", Text: "u<sub>2</sub> = (1;2;3)" },
			{ value: "c", Text: "u<sub>3</sub> = (1;-2;3)" },
			{ value: "d", Text: "u<sub>4</sub> = (2;1;1)" }
		],
		da: "../img/toan/nd23.PNG",

		nd: ""
	},
	{
		ten: "Q37; Cho tam giác OIM vuông tại I có OI = 3 và IM = 4 . Khi quay tam giác OIM xung quanh cạnh góc vuông OI thì đường gấp khúc OIM tạo thành hình nón có độ dài đường sinh bằng",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "4" }
		],
		da: "../img/toan/nd24.PNG",
		nd: ""
	},
	{
		ten: "Q38: Trên mặt phẳng toạ đọ , điểm biểu diễn cho số phứ z = 2 - 7i có toạ đọ là ",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "(2; 7)" },
			{ value: "b", Text: "(-2; 7)" },
			{ value: "c", Text: "2; -7)" },
			{ value: "d", Text: "(-7; 2" }
		],
		da: "../img/toan/nd25.PNG",
		nd: ""
	},
	{
		ten: "Q39: Cho 2 số phức z<sub>1</sub> = 2 +3i và z<sub>2</sub> = 1 - i . Số phức Z<sub>1</sub> + Z<sub>2</sub> bằng :",
		name: "question_15",
		kq: "a",
		made: "3",
		Answers: [
			{ value: "a", Text: "5 +i" },
			{ value: "b", Text: "3 + 2i" },
			{ value: "c", Text: "1 +4i" },
			{ value: "d", Text: "3 +4i" }
		],
		da: "../img/toan/nd26.PNG",
		nd: ""
	},
	{
		ten: "Q40: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",

		name: "question_06",
		kq: "d",
		made: "3",
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},
	{
		ten: "Q41: Đạo hàm của hàm số y = x<sup>3</sup> là:",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "y = -x<sup>-4</sup>" },
			{ value: "b", Text: "y = -1/2x<sup>-2</sup>" },
			{ value: "c", Text: "y = -1/3x<sup>-3</sup>" },
			{ value: "d", Text: "y = -3x<sup>-4</sup>" }
		],
		da: "../img/toan/nd28.PNG",
		nd: ""
	},
	{
		ten: "Q42: Trong không gian Oxyz , cho ba điểm A(1; 2; -1) , B (3; 0;1) , C (2; 2; - 2). Đường thẳng đi qua A và vuông góc với mặt phẳng ( ABC ) có phương trình là:",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "(x - 1)/1 = (y - 2)/-2 = (z + 1)/3" },
			{ value: "b", Text: "(x + 1 )/1 = (y + 1)/2 = (Z - 1)/1" },
			{ value: "c", Text: "(x 1 1 )/1 = (y - 2)/2 = (Z - 1)/-1" },
			{ value: "d", Text: "(x - 1 )/1 = (y - 2)/2 = (Z + 1)/1" }
		],
		da: "../img/toan/nd29.PNG",
		nd: ""
	},
	{
		ten: "Q43: Giá trị lớn nhất của hàm số f (x) = x<sup>3</sup> - 3x<sup>2</sup> - 9x + 10 trên đoạn [-2; 2] bằng",
		name: "question_15",
		kq: "c",
		made: "3",
		Answers: [
			{ value: "a", Text: "-12" },
			{ value: "b", Text: "10" },
			{ value: "c", Text: "15" },
			{ value: "d", Text: "-1" }
		],
		da: "../img/toan/nd30.PNG",
		nd: ""
	},
	{
		ten: "Q44: Có bao nhiêu số nguyên thuộc tập xác định của hàm số y = log [(6 - x)] (x + 2) ] ?",
		name: "question_15",
		kq: "a",
		made: "3",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "8" },
			{ value: "c", Text: "9" },
			{ value: "d", Text: "Vô số " }
		],
		da: "../img/toan/nd31.PNG",
		nd: ""
	},
	{
		ten: "Q45: Gọi  z<sub>1</sub> và z<sub>2</sub>	là hai nghiệm phức của phương trình z<sup>2</sup> + z + 6 = 0 . Khi đóz<sub>1</sub> + z<sub>2</sub> + z<sub>2</sub> z<sub>2</sub> bằng",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "5" },
			{ value: "c", Text: "-7" },
			{ value: "d", Text: "-5" }
		],
		da: "../img/toan/nd32.PNG",
		nd: ""
	},
	{
		ten: "Q46: Cho lăng trụ đứng ABC.A ' B 'C ' có đáy ABC là tam giác vuông tại B ,AC = 2, AB = √3 và AA ' = 1 (tham khảo hình vẽ bên dưới) Góc giữa hai mặt phẳng ( ABC ') và mặt phẳng ( ABC ) bằng",
		anh: "../img/toan/a32d1.png",
		name: "question_15",
		kq: "b",
		made: "3",
		Answers: [
			{ value: "a", Text: "30<sup>o</sup>" },
			{ value: "b", Text: "45<sup>o</sup>" },
			{ value: "c", Text: "90<sup>o</sup>" },
			{ value: "d", Text: "60<sup>o</sup>" }
		],
		da: "../img/toan/nd33.PNG",
		nd: ""
	},
	{
		ten: "Q47: Cho hình hộp chữ nhật  ABCD.A ' B 'C ' D ' có AB = a, BC = 2a và AA' = 3a (tham khảo hình vẽ)",
		anh: "../img/toan/a33d1.PNG",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "a" },
			{ value: "b", Text: "√2a" },
			{ value: "c", Text: "2a" },
			{ value: "d", Text: "3a" }
		],
		da: "../img/toan/nd34.PNG",
		nd: ""
	},
	{
		ten: "Q48: Có bao nhiêu giá trị nguyên dương của tham số m để hàm số y = |x<sup>4</sup> - 2mx<sup>2</sup> + x64| có bao nhiêu giá trị ba điểm cực trị ?",
		anh: "",
		name: "question_05",
		kq: "c",
		made: "3",
		Answers: [{
			value: "a",
			Text: "5",
		}, {
			value: "b",
			Text: "6"
		}, {
			value: "c",
			Text: " 12",
		}, {
			value: "d",
			Text: "11"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},
	{
		ten: "Q49: hàm số nào dưới đây đòng biến trên R?",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - x<sup>2</sup>" },
			{ value: "b", Text: "y = x<sup>3</sup> - x" },
			{ value: "c", Text: "v = (x - 1 )/((x + 2 )" },
			{ value: "d", Text: "y = x<sup>3</sup> + x" }
		],
		da: "../img/toan/nd36.PNG",
		nd: ""
	},
	{
		ten: "50: Trong không gian Oxyz , cho điểm A (0; -3; 2) và mặt phẳng (P) :2x - y + 3z + 5 = 0 . Mặt phẳng đi qua A và song song với (P) có phương trình là",
		name: "question_15",
		kq: "d",
		made: "3",
		Answers: [
			{ value: "a", Text: "2x - y + 3z + 9 = 0 " },
			{ value: "b", Text: "2x + y + 3z - 3 = 0 " },
			{ value: "c", Text: "2x + y + 3z + 3 = 0" },
			{ value: "d", Text: "2x - y + 3z - 9 = 0" }
		],
		da: "../img/toan/nd37.PNG",
		nd: ""
	},
	{
		anh: "../img/c1.png",
		ten: "Q1",
		name: "question_01",
		made: "4",
		kq: "a",
		cb: 1,
		Answers: [{
			value: "a",
			//	Text : "y = x<sup>3</sup> - 3x +1",
			question1: "../img/testly.png",
		}, {
			value: "b",
			Text: "y = -x<sup>3</sup> + 3x +1"
		}, {
			value: "c",
			Text: "y = -x<sup>3</sup> - 3x -1"
		}, {
			value: "d",
			Text: "y = x<sup>3</sup> - 3x -1"
		},],
		nd: "Từ đồ thị ta thấy hệ số a>0 do nhánh phải hướng lên trên. Do đó loại B và C Mặt khác đồ thị cắt trục tung tại A(0;1).Do đó chọn A",
	},

	{
		ten: "Q2: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + d có đồ thị là đường  cong trong hình bên. Dấu của các hệ số thực a, b, c là",
		anh: "../img/testly.png",
		name: "question_01",
		made: "4",
		kq: "c",
		cb: 1,
		Answers: [{
			value: "a",
			//Text : "a<0, b>0, c<0",
			question1: "../img/test.PNG",
		}, {
			value: "b",
			Text: "a>0, b>0, c>0"
		}, {
			value: "c",
			Text: "a>0, b<0, c>0"
		}, {
			value: "d",
			Text: "a>0, b<0, c<0"
		},],
		nd: "Ta có đồ thị có hình dạng như trên với hàm bậc bốn trùng phương có hai điểm cực tiểu và một điểm cực đại nên a > 0, b < 0 . Giá trị cực đại lớn hơn 0 nên c > 0."
	},

	{
		ten: "Q3: Cho hình chóp S.ABC có đáy ABC là tam giác đều và SA vuông góc với đáy, AB = a. Khoảng cách từ C đến mặt phẳng (SAB) bằng",
		anh: "",
		name: "question_03",
		kq: "c",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "a căn 2 chia 2",
		}, {
			value: "b",
			Text: "a"
		}, {
			value: "c",
			Text: " a căn 3 chia 2",
		}, {
			value: "d",
			Text: "a chia c"
		},],
		nd: "",
		da: "../img/da3.png",
	},

	{
		ten: "Q4: Chọn ngẫu nhiên hai số trong 15 số nguyên dương đầu tiên. Xác suất chọn được hai số chẵn bằng",
		anh: "",
		name: "question_04",
		kq: "b",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "11/5",
		}, {
			value: "b",
			Text: "1/5"
		}, {
			value: "c",
			Text: " 5/4",
		}, {
			value: "d",
			Text: "4/15"
		},],
		nd: "",
		da: "../img/da4.png",
	},

	{
		ten: "Q5: Cho cấp số cộng (u<sub>n</sub>) có sống hạng đầu u1 = 3 và công sai d = 4. Giá trị u5 bằng",
		anh: "",
		name: "question_05",
		kq: "d",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "23",
		}, {
			value: "b",
			Text: "768"
		}, {
			value: "c",
			Text: " -13",
		}, {
			value: "d",
			Text: "19"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},

	{
		ten: "Q6: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},

	{
		ten: "Q7: Giá trị nhỏ nhất của hàm số f(x) = ⅟3x<sup>3</sup>+ x<sup>2</sup>-3x -4",
		anh: "../img/c5.png",
		name: "question_06",
		kq: "d",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "8/3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "-4",
		}, {
			value: "d",
			Text: "-17/3"
		},],
		nd: "",
		da: "../img/da7.PNG"
	},

	{
		ten: "Q8: Cho hàm số y = f(x) có bảng biến thiên như sau:",
		anh: "../img/c8.png",
		name: "question_08",
		kq: "c",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "x = 5",
		}, {
			value: "b",
			Text: "x = 1"
		}, {
			value: "c",
			Text: "x = 3",
		}, {
			value: "d",
			Text: "x = -1"
		},],
		nd: "Chọn C" + "</br>" + "Hàm số đã cho đạt cực tiểu tại x = 3",
		da: ""
	},

	{
		ten: "Q9:Tìm tất cả các giá trị thực của tham số m  để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị. ",
		anh: "",
		name: "question_09",
		kq: "b",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "m > 2",
		}, {
			value: "b",
			Text: "m > 0"
		}, {
			value: "c",
			Text: "m ≠ 0",
		}, {
			value: "d",
			Text: "m ≥ 0"
		},],
		nd: "Chọn B" + "</br>" + "Ta có f(x) = x<sub>2</sup> - 3m" + "</br>"
			+ "Để hàm số f(x) = x<sub>3</sup> - 3mx có cực trị thì phương trình f'(x) = 0 có hai nghiệm phân biệt <=> Δ' > 0 <=> m > 0",
		da: ""
	},

	{
		ten: "Q10:Cho hình chóp tứ giác đều có cạnh bên gấp đôi cạnh đáy. Tỉ lệ giữa diện tích xung quanh và diện tích đáy của hình chóp đã cho bằng.",
		anh: "",
		name: "question_10",
		kq: "a",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "√15",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "√3",
		}, {
			value: "d",
			Text: "4√3"
		},],
		nd: "",
		da: "../img/da10.PNG"
	},

	{
		ten: "Q11: Cho hàm số y = f(x) có đạo hàm liên tục trên R và dấu của đạo hàm cho bởi bảng dưới đây. Hàm số có mấy điểm cực trị?",
		anh: "../img/c11.png",
		name: "question_11",
		kq: "c",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "0",
		}, {
			value: "b",
			Text: "3"
		}, {
			value: "c",
			Text: "2",
		}, {
			value: "d",
			Text: "1"
		},],
		nd: "Chọn C" + "</br>" + "Từ BBT ta thấy f'(x) đổi dấu qua các giá trị x = -2, x = 1 nên hàm số đã cho có 2 điểm cực trị",
		da: ""
	},

	{
		ten: "Q12: Cho khối chóp có đáy là hình vuông cạnh a và chiều cao bằng 2a. Thể tích khối chóp đã cho bằng",
		anh: "",
		name: "question_12",
		kq: "b",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "(4/3)a<sup>3</sup)",
		}, {
			value: "b",
			Text: "(2/3)a<sup>3</sup)"
		}, {
			value: "c",
			Text: "2a<sup>3</sup)",
		}, {
			value: "d",
			Text: "4a<sup>3</sup)"
		},],
		nd: "Chọn D" + "</br>" + "Thể tích khối chóp là V = 1/3.a<sup>2</sup>.2a = 2/3a<sub>3</sup>",
		da: ""
	},

	{
		ten: "Q13: Cho hàm số y = f(x)  có đồ thị như hình vẽ bên." + "</br>" + "Giá trị lớn nhất của hàm số g(x) = 2f(x) - 1 trên đoạn [-1;2] là",
		anh: "../img/c13.png",
		name: "question_13",
		kq: "b",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},

	{
		ten: "Q14: Cho khối lăng trụ đứng ABC.A'B'C' có BB' = a, đáy ABC là tam giác vuông cân tại B và AB = a. Tính thể tích V của khối lăng trụ đã cho.",
		anh: "",
		name: "question_14",
		kq: "d",
		made: "4",
		cb: 2,
		Answers: [{
			value: "a",
			Text: "3",
		}, {
			value: "b",
			Text: "5"
		}, {
			value: "c",
			Text: "6",
		}, {
			value: "d",
			Text: "2"
		},],
		nd: "",
		da: "../img/da13.PNG"
	},
	{
		ten: "Q15",
		anh: "../img/toan/a1d1.PNG",
		name: "question_01",
		kq: "a",
		made: "4",
		Answers: [{
			value: "a",
			Text: "6",
		}, {
			value: "b",
			Text: "8"
		}, {
			value: "c",
			Text: "4"
		}, {
			value: "d",
			Text: "2"
		},],
		da: "../img/toan/nd1.PNG",
		nd: "",

	},
	{
		ten: "Q16: Cho khối lăng trụ có diện tích đáy bằng 3a/2 và chiều cao 2a. Thể tích khối lăng trụ đã cho ",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "a<sup>3</sup>" },
			{ value: "b", Text: "6a<sup>3</sup>" },
			{ value: "c", Text: "3a<sup>3</sup>" },
			{ value: "d", Text: "2a<sup>3</sup>" }
		],
		da: "../img/toan/nd2.PNG",
		nd: ""
	},
	{
		ten: "Q17",
		anh: "../img/toan/a3d1.PNG",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "5" },
			{ value: "b", Text: "6" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd3.PNG",
		nd: ""

	},
	{
		ten: "Q18",
		anh: "../img/toan/a4d1.PNG",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "f(x)= -sinx" },
			{ value: "b", Text: "f(x) = -cos x ." },
			{ value: "c", Text: "f(x) = sinx" },
			{ value: "d", Text: "f(x) = cosx" }
		],
		da: "../img/toan/nd4.PNG",
		nd: ""

	},
	{
		ten: "Q19: Cho hàm số y = f(x) có bảng biến thiên như sau: Hàm số đã cho nghịch biến trên khoảng nào dưới đây?",
		anh: "../img/toan/a5d1.jpg",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "(0;+∞)" },
			{ value: "b", Text: "(0;1)" },
			{ value: "c", Text: "(-1;0)" },
			{ value: "d", Text: "(0;∞)" }
		],
		da: "../img/toan/nd5.PNG",
		nd: ""
	},
	{
		ten: "Q20",
		anh: "../img/toan/a6d1.PNG",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "√6" },
			{ value: "b", Text: "12" },
			{ value: "c", Text: "2√6" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd6.PNG",
		nd: ""
	},
	{
		ten: "Q20: Trong không gian Oxyz, cho điểm A(1;2;-3). Hình chiếu vuông góc của A lên mặt phẳng (Oxy) có tọa độ là ",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "(0;2;-3" },
			{ value: "b", Text: "1;0;-3" },
			{ value: "c", Text: "1;2;0" },
			{ value: "d", Text: "1;0;0" }
		],
		da: "../img/toan/nd7.PNG",
		nd: ""
	},
	{
		ten: "Q21: Cho khối chóp S.ABC có chiều cao bằng 3 , đáy ABC có diện tích bằng 10 . Thể tích khối chóp S.ABC bằng ",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "15" },
			{ value: "c", Text: "10" },
			{ value: "d", Text: "30" }
		],
		da: "../img/toan/nd8.PNG",
		nd: ""
	},
	{
		ten: "Q22: Cho cấp số nhân (u<sub>n</sub>) với u1 = 1 và u2 = 2 . Công bội của cấp số nhân đã cho là",
		name: "question_15",
		kq: "a",
		made: "4",
		Answers: [
			{ value: "a", Text: "q = 1/2" },
			{ value: "b", Text: "q = 2" },
			{ value: "c", Text: "q = -2" },
			{ value: "d", Text: "1 = -1/2" }
		],
		da: "../img/toan/nd9.PNG",
		nd: ""
	},
	{
		ten: "Q23: Cho hình trụ có chiều cao trụ đã cho bằng h = 1 và bán kính đáy r = 2 . Diện tích xung quanh của hình",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "4π" },
			{ value: "b", Text: "2π" },
			{ value: "c", Text: "3π" },
			{ value: "d", Text: "6π" }
		],
		da: "../img/toan/nd10.PNG",
		nd: ""
	},
	{
		ten: "Q24: Tiệm cân ngang của đồ thị hàm số y =  (2x-1)/(2x - 4) là đường thẳng có phương trình:",

		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "x = -2" },
			{ value: "b", Text: "x = 1" },
			{ value: "c", Text: "y = 1" },
			{ value: "d", Text: "y = -2" }
		],
		da: "../img/toan/nd11.PNG",
		nd: ""
	},

	{
		ten: "Q25: Tập nghiệm của bất phương trình log<sub>5</sub> (x + 1) > 2 là:",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "(9;+∞)" },
			{ value: "b", Text: "(25;+∞)" },
			{ value: "c", Text: "(31;+∞)" },
			{ value: "d", Text: "(24;+∞)" }
		],
		da: "../img/toan/nd12.PNG",
		nd: ""
	},
	{
		ten: "Q26: Hàm số nào dưới đây có bảng biến thiên như sau:",
		anh: "../img/toan/a13d1.PNG",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - 2x<sup>2</sup>" },
			{ value: "b", Text: "y = -x<sup>3</sup> + 3x" },
			{ value: "c", Text: "y = -x<sup>4</sup> + 2x<sup>2</sup>" },
			{ value: "d", Text: "y = x<sup>3</sup> - 3x" }
		],
		da: "../img/toan/nd13.PNG",
		nd: ""
	},
	{
		ten: "Q27: Môđun của số phức z = 3 + 4i bằng",
		name: "question_15",
		kq: "b",
		Answers: [
			{ value: "a", Text: "25" },
			{ value: "b", Text: "√7" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "7" }
		],
		da: "../img/toan/nd14.PNG",
		nd: ""
	},
	{
		ten: "Q28: Cho hàm số f(x) = ax<sup>4</sup> + bx<sup>2</sup> + c có đồ thị là đường cong trong hình vẽ bên. Số nghiệm của phương trình f(x) = 1 là",
		anh: "../img/toan/a15d1.PNG",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "1" },
			{ value: "b", Text: "2" },
			{ value: "c", Text: "4" },
			{ value: "d", Text: "3" }
		],
		da: "../img/toan/nd15.PNG",
		nd: ""
	},
	{
		ten: "Q29: Tập xác định của hàm số log<sub>3</sub> (x - 4) là",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "(5;+∞)" },
			{ value: "b", Text: "(-∞;+∞)" },
			{ value: "c", Text: "(4;+∞)" },
			{ value: "d", Text: "(-∞;-4)" }
		],
		da: "../img/toan/nd16.PNG",
		nd: ""
	},
	{
		ten: "Q30: Với mọi số thực a dương tỳ ý 4 log √a bàng  ",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "-2 log a" },
			{ value: "b", Text: "2 log a " },
			{ value: "c", Text: "-4 log a " },
			{ value: "d", Text: "-8 log a " }
		],
		da: "../img/toan/nd17.PNG",
		nd: ""
	},
	{
		ten: "Q31: Số các tổ hợp chập 3 của 12 phần tử là",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "1320" },
			{ value: "b", Text: "36" },
			{ value: "c", Text: "220" },
			{ value: "d", Text: "1728" }
		],
		da: "../img/toan/nd18.PNG",
		nd: ""
	},
	{
		ten: "Q32: Cho hàm số y = f(x) có bảng biến thiên như hình vẽ . Điểm cực tiểu của hàm số đã cho là",
		anh: "../img/toan/a19d1.jpg",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "x = -2 " },
			{ value: "b", Text: "x = 2" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd19.PNG",
		nd: ""
	}, {
		ten: "Q33: Trong không gian Oxyz , phương trình mặt phẳng (Oyz) là ",
		name: "question_15",
		kq: "a",
		made: "4",
		Answers: [
			{ value: "a", Text: " z = 0 " },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1 " },
			{ value: "d", Text: " x = 1" }
		],
		da: "../img/toan/nd20.PNG",
		nd: ""
	},
	{
		ten: "Q34: Nghiệm của phương trình 3<sup>2x+1</sup> = 3<sup>2-x</sup>",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "x = 1/3" },
			{ value: "b", Text: "x = 0" },
			{ value: "c", Text: "x = -1" },
			{ value: "d", Text: "x = 1" }
		],
		da: "../img/toan/nd21.PNG",
		nd: ""
	},
	{
		ten: "Q35: Cho hàm số y = ax<sup>4</sup> + bx2 + c có đồ hình cong trong hình bênh . Số điểm cực trị của hàm số đã cho là :",
		anh: "../img/toan/a22d1.PNG",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "2" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "1" },
			{ value: "d", Text: "0" }
		],
		da: "../img/toan/nd22.PNG",
		nd: ""
	},
	{
		ten: "Q36:",
		anh: "../img/toan/a23d1.PNG",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "u<sub>1</sub> = (2;1;-1)" },
			{ value: "b", Text: "u<sub>2</sub> = (1;2;3)" },
			{ value: "c", Text: "u<sub>3</sub> = (1;-2;3)" },
			{ value: "d", Text: "u<sub>4</sub> = (2;1;1)" }
		],
		da: "../img/toan/nd23.PNG",

		nd: ""
	},
	{
		ten: "Q37; Cho tam giác OIM vuông tại I có OI = 3 và IM = 4 . Khi quay tam giác OIM xung quanh cạnh góc vuông OI thì đường gấp khúc OIM tạo thành hình nón có độ dài đường sinh bằng",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "3" },
			{ value: "c", Text: "5" },
			{ value: "d", Text: "4" }
		],
		da: "../img/toan/nd24.PNG",
		nd: ""
	},
	{
		ten: "Q38: Trên mặt phẳng toạ đọ , điểm biểu diễn cho số phứ z = 2 - 7i có toạ đọ là ",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "(2; 7)" },
			{ value: "b", Text: "(-2; 7)" },
			{ value: "c", Text: "2; -7)" },
			{ value: "d", Text: "(-7; 2" }
		],
		da: "../img/toan/nd25.PNG",
		nd: ""
	},
	{
		ten: "Q39: Cho 2 số phức z<sub>1</sub> = 2 +3i và z<sub>2</sub> = 1 - i . Số phức Z<sub>1</sub> + Z<sub>2</sub> bằng :",
		name: "question_15",
		kq: "a",
		made: "4",
		Answers: [
			{ value: "a", Text: "5 +i" },
			{ value: "b", Text: "3 + 2i" },
			{ value: "c", Text: "1 +4i" },
			{ value: "d", Text: "3 +4i" }
		],
		da: "../img/toan/nd26.PNG",
		nd: ""
	},
	{
		ten: "Q40: Cho hàm số f(x) = ax<sup>3</sup> + bx<sup>2</sup> + cx +d(a ≠ 0) có có đồ thị là đường cong trong hình bên. Hàm số y = f(-x) nghịch biến trong khoảng nào dưới đây?",

		name: "question_06",
		kq: "d",
		made: "4",
		Answers: [{
			value: "a",
			Text: "(0;2)",
		}, {
			value: "b",
			Text: "(-2;2)"
		}, {
			value: "c",
			Text: " (2;+∞)",
		}, {
			value: "d",
			Text: "(-2;0)"
		},],
		nd: "Chọn D" + "</br>" + "Xet hàm số: y = f(-x)" + "</br>"
			+ "Để hàm số y = f(-x) nghịch biến" + "</br>" + "y' < 0 => f'(-x) > 0 => 0 < -2 => -2 < x < 0",
		da: ""
	},
	{
		ten: "Q41: Đạo hàm của hàm số y = x<sup>3</sup> là:",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "y = -x<sup>-4</sup>" },
			{ value: "b", Text: "y = -1/2x<sup>-2</sup>" },
			{ value: "c", Text: "y = -1/3x<sup>-3</sup>" },
			{ value: "d", Text: "y = -3x<sup>-4</sup>" }
		],
		da: "../img/toan/nd28.PNG",
		nd: ""
	},
	{
		ten: "Q42: Trong không gian Oxyz , cho ba điểm A(1; 2; -1) , B (3; 0;1) , C (2; 2; - 2). Đường thẳng đi qua A và vuông góc với mặt phẳng ( ABC ) có phương trình là:",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "(x - 1)/1 = (y - 2)/-2 = (z + 1)/3" },
			{ value: "b", Text: "(x + 1 )/1 = (y + 1)/2 = (Z - 1)/1" },
			{ value: "c", Text: "(x 1 1 )/1 = (y - 2)/2 = (Z - 1)/-1" },
			{ value: "d", Text: "(x - 1 )/1 = (y - 2)/2 = (Z + 1)/1" }
		],
		da: "../img/toan/nd29.PNG",
		nd: ""
	},
	{
		ten: "Q43: Giá trị lớn nhất của hàm số f (x) = x<sup>3</sup> - 3x<sup>2</sup> - 9x + 10 trên đoạn [-2; 2] bằng",
		name: "question_15",
		kq: "c",
		made: "4",
		Answers: [
			{ value: "a", Text: "-12" },
			{ value: "b", Text: "10" },
			{ value: "c", Text: "15" },
			{ value: "d", Text: "-1" }
		],
		da: "../img/toan/nd30.PNG",
		nd: ""
	},
	{
		ten: "Q44: Có bao nhiêu số nguyên thuộc tập xác định của hàm số y = log [(6 - x)] (x + 2) ] ?",
		name: "question_15",
		kq: "a",
		made: "4",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "8" },
			{ value: "c", Text: "9" },
			{ value: "d", Text: "Vô số " }
		],
		da: "../img/toan/nd31.PNG",
		nd: ""
	},
	{
		ten: "Q45: Gọi  z<sub>1</sub> và z<sub>2</sub>	là hai nghiệm phức của phương trình z<sup>2</sup> + z + 6 = 0 . Khi đóz<sub>1</sub> + z<sub>2</sub> + z<sub>2</sub> z<sub>2</sub> bằng",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "7" },
			{ value: "b", Text: "5" },
			{ value: "c", Text: "-7" },
			{ value: "d", Text: "-5" }
		],
		da: "../img/toan/nd32.PNG",
		nd: ""
	},
	{
		ten: "Q46: Cho lăng trụ đứng ABC.A ' B 'C ' có đáy ABC là tam giác vuông tại B ,AC = 2, AB = √3 và AA ' = 1 (tham khảo hình vẽ bên dưới) Góc giữa hai mặt phẳng ( ABC ') và mặt phẳng ( ABC ) bằng",
		anh: "../img/toan/a32d1.png",
		name: "question_15",
		kq: "b",
		made: "4",
		Answers: [
			{ value: "a", Text: "30<sup>o</sup>" },
			{ value: "b", Text: "45<sup>o</sup>" },
			{ value: "c", Text: "90<sup>o</sup>" },
			{ value: "d", Text: "60<sup>o</sup>" }
		],
		da: "../img/toan/nd33.PNG",
		nd: ""
	},
	{
		ten: "Q47: Cho hình hộp chữ nhật  ABCD.A ' B 'C ' D ' có AB = a, BC = 2a và AA' = 3a (tham khảo hình vẽ)",
		anh: "../img/toan/a33d1.PNG",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "a" },
			{ value: "b", Text: "√2a" },
			{ value: "c", Text: "2a" },
			{ value: "d", Text: "3a" }
		],
		da: "../img/toan/nd34.PNG",
		nd: ""
	},
	{
		ten: "Q48: Có bao nhiêu giá trị nguyên dương của tham số m để hàm số y = |x<sup>4</sup> - 2mx<sup>2</sup> + x64| có bao nhiêu giá trị ba điểm cực trị ?",
		anh: "",
		name: "question_05",
		kq: "c",
		made: "4",
		Answers: [{
			value: "a",
			Text: "5",
		}, {
			value: "b",
			Text: "6"
		}, {
			value: "c",
			Text: " 12",
		}, {
			value: "d",
			Text: "11"
		},],
		nd: "Ta có" + "</br>" + "u<sub>n</sub> = u<sub>1</sub> + (n-1)d => uu<sub>5</sub> = u<sub>1</sub> + 4d = 3 + 4.4 = 19",
		da: ""
	},
	{
		ten: "Q49: hàm số nào dưới đây đòng biến trên R?",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "y = x<sup>4</sup> - x<sup>2</sup>" },
			{ value: "b", Text: "y = x<sup>3</sup> - x" },
			{ value: "c", Text: "v = (x - 1 )/((x + 2 )" },
			{ value: "d", Text: "y = x<sup>3</sup> + x" }
		],
		da: "../img/toan/nd36.PNG",
		nd: ""
	},
	{
		ten: "50: Trong không gian Oxyz , cho điểm A (0; -3; 2) và mặt phẳng (P) :2x - y + 3z + 5 = 0 . Mặt phẳng đi qua A và song song với (P) có phương trình là",
		name: "question_15",
		kq: "d",
		made: "4",
		Answers: [
			{ value: "a", Text: "2x - y + 3z + 9 = 0 " },
			{ value: "b", Text: "2x + y + 3z - 3 = 0 " },
			{ value: "c", Text: "2x + y + 3z + 3 = 0" },
			{ value: "d", Text: "2x - y + 3z - 9 = 0" }
		],
		da: "../img/toan/nd37.PNG",
		nd: ""
	},
]