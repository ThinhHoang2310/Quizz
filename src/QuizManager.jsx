import React, { useState, useEffect } from "react";
import {
  Plus,
  Trash2,
  Edit2,
  X,
  Check,
  ChevronDown,
  ChevronRight,
  Play,
  RotateCcw,
  Eye,
  EyeOff,
} from "lucide-react";

import "./styles.scss";

const QuizManager = () => {
  // State chapters: đọc từ localStorage nếu có, nếu không dùng mặc định
  const [chapters, setChapters] = useState(() => {
    const saved = localStorage.getItem("chapters");
    return saved
      ? JSON.parse(saved)
      : [
          // CHƯƠNG 1
          {
            id: 1,
            name: "Chương 1: Nước",
            questions: [
              {
                id: 1,
                question: "Trong cơ thể sống, nước có vai trò nào sau đây?",
                hint: "Nước tham gia vào quá trình quang hợp ở thực vật",
                answers: [
                  {
                    id: "A",
                    text: "Là môi trường khuếch tán, phản ứng và là chất đệm ổn định pH.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Chỉ có vai trò điều hòa thân nhiệt và vận chuyển các chất.",
                    isCorrect: false,
                  },
                  {
                    id: "C",
                    text: "Tham gia phản ứng quang hợp tạo CO₂ và O₂.",
                    isCorrect: true,
                  },
                  {
                    id: "D",
                    text: "Là chất dinh dưỡng cung cấp năng lượng trực tiếp cho tế bào.",
                    isCorrect: false,
                  },
                ],
              },
            ],
          },

          // CHƯƠNG 2
          {
            id: 2,
            name: "Chương 2: Protein",
            questions: [
              {
                id: 1,
                question:
                  "Trong cơ thể sống (thực vật), nước có vai trò nào sau đây?",
                hint: "Nước tham gia vào quá trình quang hợp.",
                answers: [
                  {
                    id: "A",
                    text: "Là môi trường khuếch tán, phản ứng và là chất đệm ổn định pH.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Chỉ có vai trò điều hòa thân nhiệt và vận chuyển các chất.",
                    isCorrect: false,
                  },
                  {
                    id: "C",
                    text: "Là một trong các nguyên liệu chính cùng với CO₂ để tổng hợp Glucose và O₂.",
                    isCorrect: true,
                  },
                  {
                    id: "D",
                    text: "Là chất dinh dưỡng cung cấp năng lượng trực tiếp cho tế bào.",
                    isCorrect: false,
                  },
                ],
              },
              {
                id: 2,
                question:
                  "Phân tử nước (H2O) là một lưỡng cực phân cực mạnh. Cấu trúc này có bao nhiêu cực âm và cực dương cục bộ?",
                hint: "Tính cả hai nguyên tử H và hai cặp electron không chia sẻ trên O.",
                answers: [
                  { id: "A", text: "2 cực (1 âm, 1 dương).", isCorrect: false },
                  { id: "B", text: "3 cực (2 dương, 1 âm).", isCorrect: false },
                  {
                    id: "C",
                    text: "4 cực (2 cực dương ở H và 2 cực âm ở cặp electron tự do trên O).",
                    isCorrect: true,
                  },
                  { id: "D", text: "5 cực (2 dương, 3 âm).", isCorrect: false },
                ],
              },
              {
                id: 3,
                question:
                  "Trong phân tử nước (H2O), liên kết giữa nguyên tử Hydro và Oxy là loại liên kết nào?",
                hint: "Cả H và O đều là phi kim.",
                answers: [
                  { id: "A", text: "Liên kết ion.", isCorrect: false },
                  { id: "B", text: "Liên kết Hydro.", isCorrect: false },
                  {
                    id: "C",
                    text: "Liên kết cộng hóa trị phân cực.",
                    isCorrect: true,
                  },
                  { id: "D", text: "Liên kết kim loại.", isCorrect: false },
                ],
              },
              {
                id: 4,
                question:
                  "Một phân tử nước có khả năng tạo tối đa bao nhiêu liên kết Hydro với các phân tử nước lân cận?",
                hint: "Số lượng này bằng tổng số nguyên tử H và cặp electron tự do trên O.",
                answers: [
                  { id: "A", text: "2.", isCorrect: false },
                  { id: "B", text: "3.", isCorrect: false },
                  { id: "C", text: "4.", isCorrect: true },
                  { id: "D", text: "5.", isCorrect: false },
                ],
              },
              {
                id: 5,
                question:
                  "Tính chất đặc biệt nào của nước khiến băng (nước đá) nổi trên nước lỏng?",
                hint: "So sánh tỷ trọng của hai trạng thái.",
                answers: [
                  {
                    id: "A",
                    text: "Nước đá có nhiệt dung riêng cao hơn nước lỏng.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Tỷ trọng của nước đá thấp hơn nước lỏng do cấu trúc mạng tinh thể rỗng.",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "Nước đá có độ nhớt cao hơn nước lỏng.",
                    isCorrect: false,
                  },
                  {
                    id: "D",
                    text: "Điểm nóng chảy của nước đá cao hơn 0°C.",
                    isCorrect: false,
                  },
                ],
              },
              {
                id: 6,
                question:
                  "Trong sản xuất thực phẩm, nước đóng vai trò là chất tải nhiệt chính, ngoại trừ vai trò nào sau đây?",
                hint: "Nước không cung cấp CO2.",
                answers: [
                  {
                    id: "A",
                    text: "Là dung môi hòa tan các chất dinh dưỡng.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Tham gia vào các phản ứng hóa học như thủy phân tinh bột.",
                    isCorrect: false,
                  },
                  {
                    id: "C",
                    text: "Tạo độ dẻo, đàn hồi và cấu trúc cho sản phẩm.",
                    isCorrect: false,
                  },
                  {
                    id: "D",
                    text: "Là nguồn cung cấp CO2 chính để bảo quản.",
                    isCorrect: true,
                  },
                ],
              },
              {
                id: 7,
                question:
                  "Loại nước nào sau đây được gọi là nước liên kết hóa học, kém linh động nhất và không mất đi trong quá trình sấy?",
                hint: "Loại liên kết bền vững nhất, chiếm khoảng 3-10%.",
                answers: [
                  { id: "A", text: "Nước mao quản.", isCorrect: false },
                  { id: "B", text: "Nước thẩm thấu.", isCorrect: false },
                  { id: "C", text: "Nước hấp phụ.", isCorrect: false },
                  {
                    id: "D",
                    text: "Nước liên kết ion hoặc phân tử.",
                    isCorrect: true,
                  },
                ],
              },
              {
                id: 8,
                question:
                  "Nước hấp phụ thuộc loại liên kết nào và được hình thành chủ yếu do cơ chế gì?",
                hint: "Liên quan đến bề mặt các đại phân tử.",
                answers: [
                  {
                    id: "A",
                    text: "Liên kết hóa học do phản ứng trực tiếp.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Liên kết hóa lý do liên kết hydro giữa nước và polymer.",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "Liên kết vật lý do chênh lệch áp suất.",
                    isCorrect: false,
                  },
                  {
                    id: "D",
                    text: "Nước tự do do chênh lệch áp suất hơi nước.",
                    isCorrect: false,
                  },
                ],
              },
              {
                id: 9,
                question:
                  "Loại nước nào chiếm tỷ lệ lớn nhất trong thực phẩm và dễ bay hơi khi sấy?",
                hint: "Đây là nước tự do.",
                answers: [
                  { id: "A", text: "Nước liên kết hóa học.", isCorrect: false },
                  { id: "B", text: "Nước liên kết hóa lý.", isCorrect: false },
                  {
                    id: "C",
                    text: "Nước tự do hoặc nước cơ học.",
                    isCorrect: true,
                  },
                  { id: "D", text: "Nước hấp phụ.", isCorrect: false },
                ],
              },
              {
                id: 10,
                question:
                  "Đại lượng nào đặc trưng cho trạng thái năng lượng của nước trong thực phẩm và quyết định khả năng bảo quản?",
                hint: "Đại lượng này bằng P chia P0.",
                answers: [
                  { id: "A", text: "Độ ẩm tuyệt đối.", isCorrect: false },
                  { id: "B", text: "Hoạt độ nước a_w.", isCorrect: true },
                  { id: "C", text: "Độ ẩm cân bằng.", isCorrect: false },
                  { id: "D", text: "Áp suất hơi bão hòa.", isCorrect: false },
                ],
              },
              {
                id: 11,
                question: "Hoạt độ nước được tính theo công thức nào?",
                hint: "P là áp suất hơi riêng phần của nước trong thực phẩm.",
                answers: [
                  { id: "A", text: "a_w = P0 / P.", isCorrect: false },
                  { id: "B", text: "a_w = Wcb / Wat.", isCorrect: false },
                  { id: "C", text: "a_w = P / P0.", isCorrect: true },
                  { id: "D", text: "a_w = P + P0.", isCorrect: false },
                ],
              },
              {
                id: 12,
                question:
                  "Nước liên kết bền tồn tại khi hoạt độ nước có giá trị khoảng nào?",
                hint: "Vùng 1.",
                answers: [
                  { id: "A", text: "a_w < 0.3.", isCorrect: true },
                  { id: "B", text: "0.3 < a_w < 0.75.", isCorrect: false },
                  { id: "C", text: "a_w > 0.8.", isCorrect: false },
                  { id: "D", text: "a_w = 1.0.", isCorrect: false },
                ],
              },
              {
                id: 13,
                question: "Nước tự do tồn tại ở vùng hoạt độ nước nào?",
                hint: "Vùng 3.",
                answers: [
                  { id: "A", text: "a_w < 0.3.", isCorrect: false },
                  { id: "B", text: "0.3 < a_w < 0.75.", isCorrect: false },
                  { id: "C", text: "a_w > 0.8.", isCorrect: true },
                  { id: "D", text: "a_w = 0.5.", isCorrect: false },
                ],
              },
              {
                id: 14,
                question:
                  "Hiện tượng trễ hấp thụ trong đường đẳng nhiệt mô tả điều gì?",
                hint: "So sánh giữa hấp thụ và giải hấp.",
                answers: [
                  {
                    id: "A",
                    text: "Tốc độ oxy hóa chất béo giảm ở a_w trung bình.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Đường hấp thụ và đường giải hấp không trùng nhau.",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "Hoạt độ nước luôn bằng 1 khi độ ẩm 100%.",
                    isCorrect: false,
                  },
                  {
                    id: "D",
                    text: "Phản ứng Maillard xảy ra mạnh nhất ở a_w 0.75.",
                    isCorrect: false,
                  },
                ],
              },
              {
                id: 15,
                question:
                  "Để bảo quản thực phẩm giàu lipid, cần duy trì a_w khoảng nào?",
                hint: "Giảm oxy hóa.",
                answers: [
                  {
                    id: "A",
                    text: "a_w rất thấp (dưới 0.1).",
                    isCorrect: false,
                  },
                  { id: "B", text: "a_w khoảng 0.3 đến 0.4.", isCorrect: true },
                  { id: "C", text: "a_w 0.6 đến 0.75.", isCorrect: false },
                  { id: "D", text: "a_w trên 0.8.", isCorrect: false },
                ],
              },
              {
                id: 16,
                question:
                  "Phản ứng sẫm màu phi enzyme xảy ra mạnh nhất khi a_w nằm trong khoảng nào?",
                hint: "Khoảng 0.75.",
                answers: [
                  { id: "A", text: "a_w dưới 0.3.", isCorrect: false },
                  { id: "B", text: "a_w khoảng 0.6 đến 0.8.", isCorrect: true },
                  { id: "C", text: "a_w trên 0.9.", isCorrect: false },
                  { id: "D", text: "a_w bằng 1.", isCorrect: false },
                ],
              },
              {
                id: 17,
                question:
                  "Các phản ứng enzyme bắt đầu hoạt động hiệu quả khi a_w đạt khoảng bao nhiêu?",
                hint: "Enzyme cần nước tự do.",
                answers: [
                  { id: "A", text: "a_w dưới 0.3.", isCorrect: false },
                  { id: "B", text: "a_w lớn hơn 0.45.", isCorrect: true },
                  { id: "C", text: "a_w 0.6 đến 0.8.", isCorrect: false },
                  { id: "D", text: "a_w bằng 1.", isCorrect: false },
                ],
              },
              {
                id: 18,
                question:
                  "Hoạt độ nước tối thiểu để vi khuẩn thông thường phát triển là bao nhiêu?",
                hint: "Khoảng 0.91.",
                answers: [
                  { id: "A", text: "0.65.", isCorrect: false },
                  { id: "B", text: "0.75.", isCorrect: false },
                  { id: "C", text: "0.91.", isCorrect: true },
                  { id: "D", text: "0.85.", isCorrect: false },
                ],
              },
              {
                id: 19,
                question:
                  "Loại vi sinh vật nào phát triển được ở a_w thấp nhất?",
                hint: "Khoảng 0.65.",
                answers: [
                  { id: "A", text: "Vi khuẩn thông thường.", isCorrect: false },
                  { id: "B", text: "Nấm men.", isCorrect: false },
                  { id: "C", text: "Nấm mốc ưa khô.", isCorrect: true },
                  { id: "D", text: "Vi khuẩn ưa mặn.", isCorrect: false },
                ],
              },
              {
                id: 20,
                question:
                  "Để bảo quản vitamin C và B1 lâu hơn, cần duy trì a_w như thế nào?",
                hint: "Nước làm vitamin phân hủy nhanh hơn.",
                answers: [
                  {
                    id: "A",
                    text: "Duy trì a_w cao trên 0.9.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Duy trì a_w thấp nhất có thể.",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "a_w trung bình 0.5 đến 0.7.",
                    isCorrect: false,
                  },
                  { id: "D", text: "a_w không ảnh hưởng.", isCorrect: false },
                ],
              },
              {
                id: 21,
                question:
                  "Hiện tượng nào giải thích việc rau quả giữ được độ cứng và giòn?",
                hint: "Áp suất trương.",
                answers: [
                  { id: "A", text: "Protein biến tính.", isCorrect: false },
                  {
                    id: "B",
                    text: "Nước thẩm thấu vào tế bào tạo áp suất trương.",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "Nước thoát ra khỏi tế bào.",
                    isCorrect: false,
                  },
                  { id: "D", text: "Tinh bột hồ hóa.", isCorrect: false },
                ],
              },
              {
                id: 22,
                question:
                  "Giảm a_w bằng cách thêm chất hút ẩm mạnh hơn sucrose là sử dụng chất nào?",
                hint: "Sản phẩm thủy phân sucrose.",
                answers: [
                  { id: "A", text: "Gia nhiệt tinh bột.", isCorrect: false },
                  { id: "B", text: "Sử dụng protein.", isCorrect: false },
                  {
                    id: "C",
                    text: "Sử dụng đường nghịch đảo.",
                    isCorrect: true,
                  },
                  { id: "D", text: "Tinh bột nguyên hạt.", isCorrect: false },
                ],
              },
              {
                id: 23,
                question:
                  "Gia nhiệt thực phẩm chứa tinh bột giúp giảm a_w bằng cơ chế nào?",
                hint: "Tinh bột trương nở.",
                answers: [
                  {
                    id: "A",
                    text: "Tinh bột phân hủy thành đường.",
                    isCorrect: false,
                  },
                  { id: "B", text: "Tinh bột bay hơi.", isCorrect: false },
                  {
                    id: "C",
                    text: "Tinh bột hồ hóa và giữ nước tự do.",
                    isCorrect: true,
                  },
                  {
                    id: "D",
                    text: "Tăng nhiệt độ làm tăng a_w.",
                    isCorrect: false,
                  },
                ],
              },
              {
                id: 24,
                question:
                  "Các ion kim loại như Ca2+, Mg2+, Fe2+ có vai trò gì ở a_w trung bình?",
                hint: "Tăng oxy hóa.",
                answers: [
                  {
                    id: "A",
                    text: "Giúp vitamin C bền hơn.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Làm chậm phản ứng sẫm màu.",
                    isCorrect: false,
                  },
                  {
                    id: "C",
                    text: "Xúc tác oxy hóa chất béo.",
                    isCorrect: true,
                  },
                  { id: "D", text: "Gây trễ hấp thụ.", isCorrect: false },
                ],
              },
              {
                id: 25,
                question:
                  "Tạo mạng lưới gel từ protein giúp giảm a_w bằng cách nào?",
                hint: "Protein giữ nước.",
                answers: [
                  {
                    id: "A",
                    text: "Protein biến tính và đẩy nước.",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Protein tạo gel và giữ nước tự do.",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "Protein phân hủy tạo acid amin.",
                    isCorrect: false,
                  },
                  {
                    id: "D",
                    text: "Protein tạo phức với chất tan.",
                    isCorrect: false,
                  },
                ],
              },
            ],
          },

          // CHƯƠNG 3
          {
            id: 3,
            name: "Chương 3: Glucide",
            questions: [
              {
                id: 1,
                question:
                  "Trong thành phần cấu tạo của glucide, tỷ lệ H:O có giá trị xấp xỉ?",
                hint: "Giống như trong nước",
                answers: [
                  { id: "A", text: "1:1", isCorrect: false },
                  { id: "B", text: "2:1", isCorrect: true },
                  { id: "C", text: "3:1", isCorrect: false },
                  { id: "D", text: "4:1", isCorrect: false },
                ],
              },

              {
                id: 2,
                question: "Đường deoxyribose có công thức phân tử nào sau đây?",
                hint: "Khác 1 nguyên tử oxy so với ribose",
                answers: [
                  { id: "A", text: "C5H10O5", isCorrect: false },
                  { id: "B", text: "C5H12O6", isCorrect: false },
                  { id: "C", text: "C5H10O4", isCorrect: true },
                  { id: "D", text: "C6H12O6", isCorrect: false },
                ],
              },

              {
                id: 3,
                question:
                  "Nguồn glucide chủ yếu trong cơ thể động vật tập trung nhiều nhất ở đâu?",
                hint: "Nơi dự trữ đường",
                answers: [
                  { id: "A", text: "Não", isCorrect: false },
                  { id: "B", text: "Gan", isCorrect: true },
                  { id: "C", text: "Phổi", isCorrect: false },
                  { id: "D", text: "Dạ dày", isCorrect: false },
                ],
              },

              {
                id: 4,
                question: "1 gam glucide cung cấp khoảng bao nhiêu năng lượng?",
                hint: "Giá trị năng lượng",
                answers: [
                  { id: "A", text: "2.4 kcal", isCorrect: false },
                  { id: "B", text: "4.1 kcal", isCorrect: true },
                  { id: "C", text: "6.2 kcal", isCorrect: false },
                  { id: "D", text: "9.3 kcal", isCorrect: false },
                ],
              },

              {
                id: 5,
                question: "Glucide nào sau đây thuộc nhóm monosaccharide?",
                hint: "Một gốc đường",
                answers: [
                  { id: "A", text: "Lactose", isCorrect: false },
                  { id: "B", text: "Glucose", isCorrect: true },
                  { id: "C", text: "Sucrose", isCorrect: false },
                  { id: "D", text: "Maltose", isCorrect: false },
                ],
              },

              {
                id: 6,
                question:
                  "Trong tự nhiên, monosaccharide chủ yếu tồn tại ở dạng quang học nào?",
                hint: "Giống Amino acid",
                answers: [
                  { id: "A", text: "D", isCorrect: true },
                  { id: "B", text: "L", isCorrect: false },
                  { id: "C", text: "DL", isCorrect: false },
                  { id: "D", text: "Không quay quang học", isCorrect: false },
                ],
              },

              {
                id: 7,
                question: "Đường nào có độ ngọt cao nhất?",
                hint: "Đường quả",
                answers: [
                  { id: "A", text: "Glucose", isCorrect: false },
                  { id: "B", text: "Lactose", isCorrect: false },
                  { id: "C", text: "Fructose", isCorrect: true },
                  { id: "D", text: "Maltose", isCorrect: false },
                ],
              },

              {
                id: 8,
                question:
                  "Phản ứng Maillard xảy ra khi đường khử tác dụng với?",
                hint: "Tạo màu nâu",
                answers: [
                  { id: "A", text: "Acid", isCorrect: false },
                  { id: "B", text: "Amin", isCorrect: true },
                  { id: "C", text: "Phenol", isCorrect: false },
                  { id: "D", text: "CO2", isCorrect: false },
                ],
              },

              {
                id: 9,
                question: "Saccharose thuộc loại glucide nào?",
                hint: "Có 2 gốc đường",
                answers: [
                  { id: "A", text: "Monosaccharide", isCorrect: false },
                  { id: "B", text: "Disaccharide", isCorrect: true },
                  { id: "C", text: "Polysaccharide", isCorrect: false },
                  { id: "D", text: "Pentose", isCorrect: false },
                ],
              },

              {
                id: 10,
                question:
                  "Enzyme phân giải saccharose thành đường nghịch đảo là?",
                hint: "Có trong men",
                answers: [
                  { id: "A", text: "Amylase", isCorrect: false },
                  { id: "B", text: "Invertase", isCorrect: true },
                  { id: "C", text: "Lactase", isCorrect: false },
                  { id: "D", text: "Cellulase", isCorrect: false },
                ],
              },

              {
                id: 11,
                question: "Đường nghịch đảo được tạo thành từ?",
                hint: "Phản ứng thủy phân",
                answers: [
                  { id: "A", text: "Glucose + Lactose", isCorrect: false },
                  { id: "B", text: "Glucose + Fructose", isCorrect: true },
                  { id: "C", text: "Fructose + Galactose", isCorrect: false },
                  { id: "D", text: "Maltose + Sucrose", isCorrect: false },
                ],
              },

              {
                id: 12,
                question: "Loại glucide nào có khả năng tạo màu caramel?",
                hint: "Nhiệt độ cao",
                answers: [
                  { id: "A", text: "Glucose", isCorrect: false },
                  { id: "B", text: "Sucrose", isCorrect: false },
                  { id: "C", text: "Monosaccharide và oligo", isCorrect: true },
                  { id: "D", text: "Chỉ polysaccharide", isCorrect: false },
                ],
              },

              {
                id: 13,
                question: "Polymer chính của tinh bột là?",
                hint: "Hỗn hợp 2 loại",
                answers: [
                  { id: "A", text: "Cellulose + Chitin", isCorrect: false },
                  { id: "B", text: "Amylose + Amylopectin", isCorrect: true },
                  { id: "C", text: "Glucose + Fructose", isCorrect: false },
                  { id: "D", text: "Lactose + Maltose", isCorrect: false },
                ],
              },

              {
                id: 14,
                question: "Dạng tinh bột nào tạo màu xanh tím với Iod?",
                hint: "Cấu trúc xoắn",
                answers: [
                  { id: "A", text: "Amylose", isCorrect: true },
                  { id: "B", text: "Amylopectin", isCorrect: false },
                  { id: "C", text: "Glycogen", isCorrect: false },
                  { id: "D", text: "Cellulose", isCorrect: false },
                ],
              },

              {
                id: 15,
                question: "Dạng tinh bột nào tạo màu tím đỏ với Iod?",
                hint: "Có phân nhánh",
                answers: [
                  { id: "A", text: "Amylose", isCorrect: false },
                  { id: "B", text: "Amylopectin", isCorrect: true },
                  { id: "C", text: "Glycogen", isCorrect: false },
                  { id: "D", text: "Dextrin", isCorrect: false },
                ],
              },

              {
                id: 16,
                question: "Tinh bột hồ hóa bắt đầu xảy ra khi?",
                hint: "Liên kết hydro bị phá",
                answers: [
                  { id: "A", text: "Đun khô", isCorrect: false },
                  { id: "B", text: "Gia nhiệt trong nước", isCorrect: true },
                  {
                    id: "C",
                    text: "Trong môi trường acid mạnh",
                    isCorrect: false,
                  },
                  { id: "D", text: "Ở nhiệt độ phòng", isCorrect: false },
                ],
              },

              {
                id: 17,
                question: "Hiện tượng vữa và tách nước là?",
                hint: "Sau quá trình hồ hóa",
                answers: [
                  { id: "A", text: "Hồ hóa", isCorrect: false },
                  { id: "B", text: "Thoái hóa", isCorrect: true },
                  { id: "C", text: "Dịch hóa", isCorrect: false },
                  { id: "D", text: "Phân giải", isCorrect: false },
                ],
              },

              {
                id: 18,
                question:
                  "Chất giúp tinh bột không bị tách nước bằng cách tạo liên kết ion với Ca2+ là?",
                hint: "Hai loại pectin",
                answers: [
                  { id: "A", text: "HMP", isCorrect: false },
                  { id: "B", text: "LMP", isCorrect: true },
                  { id: "C", text: "AP", isCorrect: false },
                  { id: "D", text: "AM", isCorrect: false },
                ],
              },

              {
                id: 19,
                question: "Polysaccharide chính của thành tế bào thực vật là?",
                hint: "Không tiêu hóa ở người",
                answers: [
                  { id: "A", text: "Pectin", isCorrect: false },
                  { id: "B", text: "Chitin", isCorrect: false },
                  { id: "C", text: "Cellulose", isCorrect: true },
                  { id: "D", text: "Glycogen", isCorrect: false },
                ],
              },

              {
                id: 20,
                question: "Sản phẩm thủy phân hoàn toàn của tinh bột là?",
                hint: "Một monosaccharide",
                answers: [
                  { id: "A", text: "Dextrin", isCorrect: false },
                  { id: "B", text: "Maltose", isCorrect: false },
                  { id: "C", text: "Cellobiose", isCorrect: false },
                  { id: "D", text: "Glucose", isCorrect: true },
                ],
              },

              {
                id: 21,
                question: "Dextrin có DE càng cao thì?",
                hint: "Đầu khử",
                answers: [
                  { id: "A", text: "Phân tử càng lớn", isCorrect: false },
                  { id: "B", text: "Độ đường khử càng nhiều", isCorrect: true },
                  { id: "C", text: "Hồ càng đặc", isCorrect: false },
                  { id: "D", text: "Ít tan trong nước", isCorrect: false },
                ],
              },

              {
                id: 22,
                question: "Glycogen thuộc loại polysaccharide nào?",
                hint: "Nguồn động vật",
                answers: [
                  { id: "A", text: "PS thực vật", isCorrect: false },
                  { id: "B", text: "PS dị thể", isCorrect: false },
                  { id: "C", text: "D-glucan", isCorrect: true },
                  { id: "D", text: "Cellodextrin", isCorrect: false },
                ],
              },

              {
                id: 23,
                question: "Pentose là loại monosaccharide chứa?",
                hint: "Tên dựa vào số C",
                answers: [
                  { id: "A", text: "2 carbon", isCorrect: false },
                  { id: "B", text: "3 carbon", isCorrect: false },
                  { id: "C", text: "4 carbon", isCorrect: false },
                  { id: "D", text: "5 carbon", isCorrect: true },
                ],
              },

              {
                id: 24,
                question: "Saccharose thuộc loại đường:",
                hint: "Tính khử",
                answers: [
                  { id: "A", text: "Đường khử", isCorrect: false },
                  { id: "B", text: "Đường không khử", isCorrect: true },
                  { id: "C", text: "Không hòa tan", isCorrect: false },
                  { id: "D", text: "Đa đường", isCorrect: false },
                ],
              },

              {
                id: 25,
                question: "Chất ngọt nào thuộc nhóm oligosaccharide?",
                hint: "Đường nha",
                answers: [
                  { id: "A", text: "Glucose", isCorrect: false },
                  { id: "B", text: "Lactose", isCorrect: false },
                  { id: "C", text: "Maltose", isCorrect: true },
                  { id: "D", text: "Fructose", isCorrect: false },
                ],
              },
            ],
          },

          //  CHƯƠNG 4
          {
            id: 4,
            name: "Chuong 4: Lipid",

            questions: [
              {
                id: 1,
                question:
                  "Lipid thuộc nhóm chất sinh năng lượng với giá trị cao nhất trong các chất dinh dưỡng.",
                hint: "1g lipid cung cấp nhiều năng lượng hơn glucid và protein.",
                answers: [
                  { id: "A", text: "Đúng", isCorrect: true },
                  { id: "B", text: "Sai", isCorrect: false },
                  {
                    id: "C",
                    text: "Đúng nhưng chỉ đối với động vật",
                    isCorrect: false,
                  },
                  {
                    id: "D",
                    text: "Sai vì lipid ít năng lượng hơn protein",
                    isCorrect: false,
                  },
                ],
              },
              {
                id: 2,
                question:
                  "Trong cấu tạo lipid, nhóm tạo liên kết ester là do phản ứng giữa acid béo và...",
                hint: "Phản ứng ester hóa",
                answers: [
                  { id: "A", text: "Ancol", isCorrect: true },
                  { id: "B", text: "Aldehyt", isCorrect: false },
                  { id: "C", text: "Cetone", isCorrect: false },
                  { id: "D", text: "Protein", isCorrect: false },
                ],
              },
              {
                id: 3,
                question: "Thành phần chính của lipid trung tính là:",
                hint: "Triglycerid",
                answers: [
                  { id: "A", text: "Diglycerid", isCorrect: false },
                  { id: "B", text: "Triglycerid", isCorrect: true },
                  { id: "C", text: "Monoglycerid", isCorrect: false },
                  { id: "D", text: "Sterol", isCorrect: false },
                ],
              },
              {
                id: 4,
                question: "Acid béo không no có đặc điểm nào sau đây?",
                hint: "Chứa liên kết đôi C=C",
                answers: [
                  { id: "A", text: "Không có liên kết đôi", isCorrect: false },
                  {
                    id: "B",
                    text: "Chứa liên kết đôi trong mạch carbon",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "Có dạng thẳng hoàn toàn",
                    isCorrect: false,
                  },
                  { id: "D", text: "Không phản ứng oxy hóa", isCorrect: false },
                ],
              },
              {
                id: 5,
                question: "Acid Linoleic và Linolenic thuộc nhóm:",
                hint: "Cơ thể không tự tổng hợp được",
                answers: [
                  { id: "A", text: "Acid béo bão hòa", isCorrect: false },
                  {
                    id: "B",
                    text: "Acid béo không bão hòa thiết yếu",
                    isCorrect: true,
                  },
                  { id: "C", text: "Sterol", isCorrect: false },
                  { id: "D", text: "Lipid dẫn xuất", isCorrect: false },
                ],
              },
              {
                id: 6,
                question: "Lipid nào sau đây không chứa gốc glycerol?",
                hint: "Steroid",
                answers: [
                  { id: "A", text: "Triglycerid", isCorrect: false },
                  { id: "B", text: "Phospholipid", isCorrect: false },
                  { id: "C", text: "Steroid", isCorrect: true },
                  { id: "D", text: "Glycolipid", isCorrect: false },
                ],
              },
              {
                id: 7,
                question:
                  "Chất béo trong thực phẩm thường tồn tại chủ yếu dưới dạng:",
                hint: "Dầu ăn",
                answers: [
                  { id: "A", text: "Sterol", isCorrect: false },
                  { id: "B", text: "Triglycerid", isCorrect: true },
                  { id: "C", text: "Phospholipid", isCorrect: false },
                  { id: "D", text: "Waxes", isCorrect: false },
                ],
              },
              {
                id: 8,
                question: "Tính chất nào sau đây làm cho dầu dễ bị oxy hóa?",
                hint: "Càng nhiều C=C càng dễ oxy hóa",
                answers: [
                  {
                    id: "A",
                    text: "Có nhiều acid béo bão hòa",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Có nhiều acid béo không no",
                    isCorrect: true,
                  },
                  {
                    id: "C",
                    text: "Không chứa liên kết đôi",
                    isCorrect: false,
                  },
                  { id: "D", text: "Không phản ứng với O2", isCorrect: false },
                ],
              },
              {
                id: 9,
                question: "Hiện tượng ôi hóa lipid xảy ra chủ yếu do phản ứng:",
                hint: "Gây mùi hôi",
                answers: [
                  { id: "A", text: "Caramel hóa", isCorrect: false },
                  { id: "B", text: "Trùng hợp", isCorrect: false },
                  {
                    id: "C",
                    text: "Oxy hóa acid béo không no",
                    isCorrect: true,
                  },
                  { id: "D", text: "Đông tụ", isCorrect: false },
                ],
              },
              {
                id: 10,
                question: "Hydro hóa dầu nhằm mục đích:",
                hint: "Chuyển dầu thành mỡ rắn",
                answers: [
                  { id: "A", text: "Tăng số liên kết đôi", isCorrect: false },
                  { id: "B", text: "Giảm mức không no", isCorrect: true },
                  { id: "C", text: "Giảm điểm nóng chảy", isCorrect: false },
                  { id: "D", text: "Tăng tính lỏng", isCorrect: false },
                ],
              },
              {
                id: 11,
                question:
                  "Hydro hóa một phần có thể tạo thành dạng acid béo nào nguy hại?",
                hint: "Đồ chiên rán",
                answers: [
                  { id: "A", text: "Cis", isCorrect: false },
                  { id: "B", text: "Trans", isCorrect: true },
                  { id: "C", text: "Nội bào", isCorrect: false },
                  { id: "D", text: "Bão hòa hoàn toàn", isCorrect: false },
                ],
              },
              {
                id: 12,
                question: "Lipid dẫn xuất gồm:",
                hint: "Sterol, carotenoid...",
                answers: [
                  { id: "A", text: "Triglycerid", isCorrect: false },
                  { id: "B", text: "Sterol", isCorrect: true },
                  { id: "C", text: "Glycolipid", isCorrect: false },
                  { id: "D", text: "Phospholipid", isCorrect: false },
                ],
              },
              {
                id: 13,
                question: "Vai trò quan trọng của cholesterol trong cơ thể:",
                hint: "Tiền chất hormone",
                answers: [
                  { id: "A", text: "Tổng hợp vitamin B", isCorrect: false },
                  {
                    id: "B",
                    text: "Tiền chất hormone steroid",
                    isCorrect: true,
                  },
                  { id: "C", text: "Tạo màu vàng", isCorrect: false },
                  { id: "D", text: "Chuyển hóa đường", isCorrect: false },
                ],
              },
              {
                id: 14,
                question: "Nhóm lipid có khả năng tạo nhũ tương tốt:",
                hint: "Có nhóm phosphat",
                answers: [
                  { id: "A", text: "Steroid", isCorrect: false },
                  { id: "B", text: "Phospholipid", isCorrect: true },
                  { id: "C", text: "Wax", isCorrect: false },
                  { id: "D", text: "Triglycerid", isCorrect: false },
                ],
              },
              {
                id: 15,
                question: "Phospholipid có đặc tính:",
                hint: "Một đầu ưa nước, một đầu kỵ nước",
                answers: [
                  { id: "A", text: "Kị nước hoàn toàn", isCorrect: false },
                  { id: "B", text: "Ưa nước hoàn toàn", isCorrect: false },
                  { id: "C", text: "Lưỡng tính", isCorrect: true },
                  { id: "D", text: "Không hòa tan", isCorrect: false },
                ],
              },
              {
                id: 16,
                question: "Trong oxi hóa lipid, giai đoạn khởi phát tạo ra:",
                hint: "Gốc tự do",
                answers: [
                  { id: "A", text: "Peroxide", isCorrect: false },
                  { id: "B", text: "Gốc tự do", isCorrect: true },
                  { id: "C", text: "Hydrocarbon", isCorrect: false },
                  { id: "D", text: "Rượu", isCorrect: false },
                ],
              },
              {
                id: 17,
                question: "Chất chống oxy hóa tự nhiên trong dầu thực vật:",
                hint: "Vitamin trong dầu",
                answers: [
                  { id: "A", text: "Vitamin C", isCorrect: false },
                  { id: "B", text: "Vitamin E", isCorrect: true },
                  { id: "C", text: "Vitamin B1", isCorrect: false },
                  { id: "D", text: "Vitamin K", isCorrect: false },
                ],
              },
              {
                id: 18,
                question: "Nhiệt độ sôi tăng sẽ làm quá trình oxy hóa lipid:",
                hint: "Nhiệt càng cao càng nhanh",
                answers: [
                  { id: "A", text: "Chậm lại", isCorrect: false },
                  { id: "B", text: "Tăng nhanh", isCorrect: true },
                  { id: "C", text: "Không thay đổi", isCorrect: false },
                  { id: "D", text: "Ngừng hoàn toàn", isCorrect: false },
                ],
              },
              {
                id: 19,
                question: "Lipase phân hủy triglycerid tạo thành glycerol và:",
                hint: "Thủy phân ester",
                answers: [
                  { id: "A", text: "Acid amin", isCorrect: false },
                  { id: "B", text: "Acid béo tự do", isCorrect: true },
                  { id: "C", text: "Sterol", isCorrect: false },
                  { id: "D", text: "Glucid", isCorrect: false },
                ],
              },
              {
                id: 20,
                question: "Hiện tượng khử mùi dầu dựa trên nguyên tắc:",
                hint: "Loại chất gây mùi",
                answers: [
                  { id: "A", text: "Oxy hóa mạnh", isCorrect: false },
                  { id: "B", text: "Chưng cất hơi nước", isCorrect: true },
                  { id: "C", text: "Nhiệt phân", isCorrect: false },
                  { id: "D", text: "Kết tủa", isCorrect: false },
                ],
              },
              {
                id: 21,
                question: "Waxes là loại lipid có thành phần:",
                hint: "Acid béo + alcol cao phân tử",
                answers: [
                  { id: "A", text: "Acid béo + glycerol", isCorrect: false },
                  {
                    id: "B",
                    text: "Acid béo + alcol cao phân tử",
                    isCorrect: true,
                  },
                  { id: "C", text: "Acid amin", isCorrect: false },
                  { id: "D", text: "Phosphat", isCorrect: false },
                ],
              },
              {
                id: 22,
                question: "Sản phẩm thủy phân cuối cùng của triglycerid là:",
                hint: "Hydrolysis",
                answers: [
                  { id: "A", text: "Diglycerid", isCorrect: false },
                  {
                    id: "B",
                    text: "Acid béo tự do + glycerol",
                    isCorrect: true,
                  },
                  { id: "C", text: "Monoglycerid", isCorrect: false },
                  { id: "D", text: "Acid amin", isCorrect: false },
                ],
              },
              {
                id: 23,
                question: "Dầu olive chứa chủ yếu acid béo nào?",
                hint: "Có lợi cho tim mạch",
                answers: [
                  { id: "A", text: "Oleic", isCorrect: true },
                  { id: "B", text: "Stearic", isCorrect: false },
                  { id: "C", text: "Palmitic", isCorrect: false },
                  { id: "D", text: "Lauric", isCorrect: false },
                ],
              },
              {
                id: 24,
                question:
                  "Xúc tác kim loại (Fe, Cu) trong dầu thực vật có thể:",
                hint: "Tạo gốc tự do",
                answers: [
                  { id: "A", text: "Chống oxy hóa", isCorrect: false },
                  { id: "B", text: "Làm tăng oxy hóa lipid", isCorrect: true },
                  { id: "C", text: "Ổn định cấu trúc", isCorrect: false },
                  { id: "D", text: "Giảm chỉ số peroxide", isCorrect: false },
                ],
              },
              {
                id: 25,
                question: "Phương pháp hạn chế oxy hóa lipid hiệu quả nhất:",
                hint: "Giảm oxy, ánh sáng, nhiệt",
                answers: [
                  {
                    id: "A",
                    text: "Tăng tiếp xúc không khí",
                    isCorrect: false,
                  },
                  {
                    id: "B",
                    text: "Bảo quản tối, kín, nhiệt độ thấp",
                    isCorrect: true,
                  },
                  { id: "C", text: "Tăng pH môi trường", isCorrect: false },
                  {
                    id: "D",
                    text: "Tăng chiên rán nhiều lần",
                    isCorrect: false,
                  },
                ],
              },
            ],
          },

          // CHƯƠNG 5
          {
            id: 5,
            name: "Chương 5: Vitamin",
            questions: [],
          },

          {
            id: 6,
            name: "Chương 6: Chất Khoáng",
            questions: [],
          },
        ];
  });

  // Lưu chapters vào localStorage mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem("chapters", JSON.stringify(chapters));
  }, [chapters]);

  // State quản lý mode, active chapter, edit question, thêm question
  const [mode, setMode] = useState("manage"); // 'manage' hoặc 'quiz'
  const [activeChapter, setActiveChapter] = useState(null);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [showAddQuestion, setShowAddQuestion] = useState(false);

  // Quiz mode states
  const [quizChapter, setQuizChapter] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showHint, setShowHint] = useState(false);

  // State để thêm câu hỏi mới
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    hint: "",
    answers: [
      { id: "A", text: "", isCorrect: false },
      { id: "B", text: "", isCorrect: false },
      { id: "C", text: "", isCorrect: false },
      { id: "D", text: "", isCorrect: false },
    ],
  });

  // Management functions
  const addChapter = () => {
    const newChapter = {
      id: Date.now(),
      name: `Chương ${chapters.length + 1}: Tên chương mới`,
      questions: [],
    };
    setChapters([...chapters, newChapter]);
  };

  const deleteChapter = (chapterId) => {
    if (window.confirm("Bạn có chắc muốn xóa chương này?")) {
      setChapters(chapters.filter((c) => c.id !== chapterId));
      if (activeChapter === chapterId) setActiveChapter(null);
    }
  };

  const updateChapterName = (chapterId, newName) => {
    setChapters(
      chapters.map((c) => (c.id === chapterId ? { ...c, name: newName } : c))
    );
  };

  const addQuestion = (chapterId) => {
    if (!newQuestion.question.trim()) {
      alert("Vui lòng nhập câu hỏi!");
      return;
    }

    const hasCorrectAnswer = newQuestion.answers.some((a) => a.isCorrect);
    if (!hasCorrectAnswer) {
      alert("Vui lòng chọn đáp án đúng!");
      return;
    }

    const question = {
      id: Date.now(),
      ...newQuestion,
    };

    setChapters(
      chapters.map((c) =>
        c.id === chapterId ? { ...c, questions: [...c.questions, question] } : c
      )
    );

    setNewQuestion({
      question: "",
      hint: "",
      answers: [
        { id: "A", text: "", isCorrect: false },
        { id: "B", text: "", isCorrect: false },
        { id: "C", text: "", isCorrect: false },
        { id: "D", text: "", isCorrect: false },
      ],
    });
    setShowAddQuestion(false);
  };

  const deleteQuestion = (chapterId, questionId) => {
    if (window.confirm("Bạn có chắc muốn xóa câu hỏi này?")) {
      setChapters(
        chapters.map((c) =>
          c.id === chapterId
            ? {
                ...c,
                questions: c.questions.filter((q) => q.id !== questionId),
              }
            : c
        )
      );
    }
  };

  const updateQuestion = (chapterId, questionId, updatedQuestion) => {
    setChapters(
      chapters.map((c) =>
        c.id === chapterId
          ? {
              ...c,
              questions: c.questions.map((q) =>
                q.id === questionId ? { ...q, ...updatedQuestion } : q
              ),
            }
          : c
      )
    );
    setEditingQuestion(null);
  };

  const toggleChapter = (chapterId) => {
    setActiveChapter(activeChapter === chapterId ? null : chapterId);
  };

  // Quiz functions
  const startQuiz = (chapter) => {
    if (chapter.questions.length === 0) {
      alert("Chương này chưa có câu hỏi!");
      return;
    }
    setQuizChapter(chapter);
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(chapter.questions.length).fill(null));
    setShowResults(false);
    setShowHint(false);
    setMode("quiz");
  };

  const selectAnswer = (answerId) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answerId;
    setUserAnswers(newAnswers);
  };

  const nextQuestion = () => {
    setShowHint(false);
    if (currentQuestionIndex < quizChapter.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    setShowHint(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const submitQuiz = () => {
    const unanswered = userAnswers.some((a) => a === null);
    if (unanswered) {
      if (
        !window.confirm(
          "Bạn chưa trả lời hết các câu hỏi. Bạn có muốn nộp bài không?"
        )
      ) {
        return;
      }
    }
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(quizChapter.questions.length).fill(null));
    setShowResults(false);
    setShowHint(false);
  };

  const exitQuiz = () => {
    setMode("manage");
    setQuizChapter(null);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
    setShowHint(false);
  };

  const calculateScore = () => {
    let correct = 0;
    quizChapter.questions.forEach((q, index) => {
      const correctAnswer = q.answers.find((a) => a.isCorrect);
      if (userAnswers[index] === correctAnswer.id) {
        correct++;
      }
    });
    return { correct, total: quizChapter.questions.length };
  };

  // Render Quiz Mode
  if (mode === "quiz" && quizChapter) {
    const currentQuestion = quizChapter.questions[currentQuestionIndex];
    const score = showResults ? calculateScore() : null;

    return (
      <div className="quiz-mode">
        <div className="quiz-header">
          <div className="quiz-title">
            <h2>{quizChapter.name}</h2>
            <button className="btn-exit" onClick={exitQuiz}>
              <X size={20} />
              Thoát
            </button>
          </div>
          <div className="quiz-progress">
            <div className="progress-bar">
              {quizChapter.questions.map((_, index) => (
                <div
                  key={index}
                  className={`progress-item ${
                    index === currentQuestionIndex ? "active" : ""
                  } ${userAnswers[index] !== null ? "answered" : ""} ${
                    showResults
                      ? userAnswers[index] ===
                        quizChapter.questions[index].answers.find(
                          (a) => a.isCorrect
                        )?.id
                        ? "correct"
                        : "incorrect"
                      : ""
                  }`}
                  onClick={() => {
                    setCurrentQuestionIndex(index);
                    setShowHint(false);
                  }}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="progress-text">
              Câu {currentQuestionIndex + 1}/{quizChapter.questions.length}
            </div>
          </div>
        </div>

        {showResults && (
          <div className="results-banner">
            <h3>
              Kết quả: {score.correct}/{score.total} câu đúng
            </h3>
            <p>Điểm: {((score.correct / score.total) * 10).toFixed(2)}</p>
            <button className="btn-primary" onClick={restartQuiz}>
              <RotateCcw size={18} />
              Làm lại
            </button>
          </div>
        )}

        <div className="quiz-content">
          <div className="question-box">
            <h3 className="question-title">
              {currentQuestionIndex + 1}. {currentQuestion.question}
            </h3>

            {currentQuestion.hint && (
              <div className="hint-section">
                <button
                  className="btn-hint"
                  onClick={() => setShowHint(!showHint)}
                >
                  {showHint ? <EyeOff size={16} /> : <Eye size={16} />}
                  {showHint ? "Ẩn gợi ý" : "Hiện gợi ý"}
                </button>
                {showHint && (
                  <div className="hint-content">💡 {currentQuestion.hint}</div>
                )}
              </div>
            )}

            <div className="answers-grid">
              {currentQuestion.answers.map((answer) => {
                const isSelected =
                  userAnswers[currentQuestionIndex] === answer.id;
                const isCorrect = answer.isCorrect;
                const showCorrectAnswer = showResults;

                return (
                  <div
                    key={answer.id}
                    className={`answer-box ${isSelected ? "selected" : ""} ${
                      showCorrectAnswer && isCorrect ? "correct-answer" : ""
                    } ${
                      showCorrectAnswer && isSelected && !isCorrect
                        ? "wrong-answer"
                        : ""
                    } ${showResults ? "disabled" : ""}`}
                    onClick={() => !showResults && selectAnswer(answer.id)}
                  >
                    <span className="answer-id">{answer.id}</span>
                    <span className="answer-text">{answer.text}</span>
                    {showCorrectAnswer && isCorrect && (
                      <Check size={20} className="answer-icon" />
                    )}
                    {showCorrectAnswer && isSelected && !isCorrect && (
                      <X size={20} className="answer-icon" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="quiz-navigation">
            <button
              className="btn-nav"
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              ← Câu trước
            </button>

            {!showResults &&
            currentQuestionIndex === quizChapter.questions.length - 1 ? (
              <button className="btn-submit" onClick={submitQuiz}>
                Nộp bài
              </button>
            ) : (
              <button
                className="btn-nav"
                onClick={nextQuestion}
                disabled={
                  currentQuestionIndex === quizChapter.questions.length - 1
                }
              >
                Câu sau →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Render Management Mode
  return (
    <div className="quiz-manager">
      <div className="header">
        <div className="header-content">
          <h1>Quản lý Câu hỏi Trắc nghiệm</h1>
          <button className="btn-primary" onClick={addChapter}>
            <Plus size={20} />
            Thêm Chương
          </button>
        </div>
      </div>

      <div className="content">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="chapter-card">
            <div className="chapter-header">
              <div
                className="chapter-title-section"
                onClick={() => toggleChapter(chapter.id)}
              >
                {activeChapter === chapter.id ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
                <input
                  type="text"
                  value={chapter.name}
                  onChange={(e) =>
                    updateChapterName(chapter.id, e.target.value)
                  }
                  onClick={(e) => e.stopPropagation()}
                  className="chapter-name-input"
                />
                <span className="question-count">
                  ({chapter.questions ? chapter.questions.length : 0} câu hỏi)
                </span>
              </div>

              <div className="chapter-actions">
                <button
                  className="btn-icon btn-quiz"
                  onClick={() => startQuiz(chapter)}
                  title="Làm trắc nghiệm"
                >
                  <Play size={18} />
                </button>
                <button
                  className="btn-icon btn-success"
                  onClick={() => {
                    setActiveChapter(chapter.id);
                    setShowAddQuestion(true);
                  }}
                >
                  <Plus size={18} />
                </button>
                <button
                  className="btn-icon btn-danger"
                  onClick={() => deleteChapter(chapter.id)}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            {activeChapter === chapter.id && (
              <div className="chapter-content">
                {showAddQuestion && (
                  <div className="question-form">
                    <h3>Thêm câu hỏi mới</h3>
                    <input
                      type="text"
                      placeholder="Nhập câu hỏi..."
                      value={newQuestion.question}
                      onChange={(e) =>
                        setNewQuestion({
                          ...newQuestion,
                          question: e.target.value,
                        })
                      }
                      className="question-input"
                    />

                    <input
                      type="text"
                      placeholder="Nhập gợi ý (không bắt buộc)..."
                      value={newQuestion.hint}
                      onChange={(e) =>
                        setNewQuestion({ ...newQuestion, hint: e.target.value })
                      }
                      className="hint-input"
                    />

                    <div className="answers-list">
                      {newQuestion.answers.map((answer, index) => (
                        <div key={answer.id} className="answer-item">
                          <span className="answer-label">{answer.id}.</span>
                          <textarea
                            type="text"
                            placeholder={`Đáp án ${answer.id}`}
                            value={answer.text}
                            onChange={(e) => {
                              const updatedAnswers = [...newQuestion.answers];
                              updatedAnswers[index].text = e.target.value;
                              setNewQuestion({
                                ...newQuestion,
                                answers: updatedAnswers,
                              });
                            }}
                            className="answer-input"
                          />
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              checked={answer.isCorrect}
                              onChange={(e) => {
                                const updatedAnswers = newQuestion.answers.map(
                                  (a, i) => ({
                                    ...a,
                                    isCorrect:
                                      i === index ? e.target.checked : false,
                                  })
                                );
                                setNewQuestion({
                                  ...newQuestion,
                                  answers: updatedAnswers,
                                });
                              }}
                            />
                            Đúng
                          </label>
                        </div>
                      ))}
                    </div>

                    <div className="form-actions">
                      <button
                        className="btn-secondary"
                        onClick={() => setShowAddQuestion(false)}
                      >
                        <X size={18} />
                        Hủy
                      </button>
                      <button
                        className="btn-primary"
                        onClick={() => addQuestion(chapter.id)}
                      >
                        <Check size={18} />
                        Lưu câu hỏi
                      </button>
                    </div>
                  </div>
                )}

                {chapter.questions.map((question, qIndex) => (
                  <div key={question.id} className="question-card">
                    {editingQuestion === question.id ? (
                      <div className="question-form">
                        <input
                          type="text"
                          value={question.question}
                          onChange={(e) =>
                            updateQuestion(chapter.id, question.id, {
                              question: e.target.value,
                            })
                          }
                          className="question-input"
                        />
                        <input
                          type="text"
                          placeholder="Nhập gợi ý (không bắt buộc)..."
                          value={question.hint || ""}
                          onChange={(e) =>
                            updateQuestion(chapter.id, question.id, {
                              hint: e.target.value,
                            })
                          }
                          className="hint-input"
                        />
                        <div className="answers-list">
                          {question.answers.map((answer, aIndex) => (
                            <div key={answer.id} className="answer-item">
                              <span className="answer-label">{answer.id}.</span>
                              <input
                                type="text"
                                value={answer.text}
                                onChange={(e) => {
                                  const updatedAnswers = [...question.answers];
                                  updatedAnswers[aIndex].text = e.target.value;
                                  updateQuestion(chapter.id, question.id, {
                                    answers: updatedAnswers,
                                  });
                                }}
                                className="answer-input"
                              />
                              <label className="checkbox-label">
                                <input
                                  type="checkbox"
                                  checked={answer.isCorrect}
                                  onChange={(e) => {
                                    const updatedAnswers = question.answers.map(
                                      (a, i) => ({
                                        ...a,
                                        isCorrect:
                                          i === aIndex
                                            ? e.target.checked
                                            : false,
                                      })
                                    );
                                    updateQuestion(chapter.id, question.id, {
                                      answers: updatedAnswers,
                                    });
                                  }}
                                />
                                Đúng
                              </label>
                            </div>
                          ))}
                        </div>
                        <button
                          className="btn-primary"
                          onClick={() => setEditingQuestion(null)}
                        >
                          <Check size={18} />
                          Xong
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="question-header">
                          <span className="question-number">{qIndex + 1}.</span>

                          <div className="question-wrap">
                            <div className="question-content">
                              <p className="question-text">
                                {question.question}
                              </p>
                              {question.hint && (
                                <p className="question-hint">
                                  💡 Gợi ý: {question.hint}
                                </p>
                              )}
                            </div>
                            <div className="question-actions">
                              <button
                                className="btn-icon btn-warning"
                                onClick={() => setEditingQuestion(question.id)}
                              >
                                <Edit2 size={16} />
                              </button>
                              <button
                                className="btn-icon btn-danger"
                                onClick={() =>
                                  deleteQuestion(chapter.id, question.id)
                                }
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="answers-display">
                          {question.answers.map((answer) => (
                            <div
                              key={answer.id}
                              className={`answer-option ${
                                answer.isCorrect ? "correct" : ""
                              }`}
                            >
                              <span className="answer-label">{answer.id}.</span>
                              <span className="answer-text">{answer.text}</span>
                              {answer.isCorrect && (
                                <Check size={16} className="check-icon" />
                              )}
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style>{`
        .quiz-manager {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
        }

        .header {
          margin-bottom: 2rem;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
          padding: 1.5rem 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .header h1 {
          margin: 0;
          color: #2d3748;
          font-size: 1.8rem;
        }

        .content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chapter-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .chapter-card:hover {
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .chapter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: linear-gradient(to right, #f7fafc, #edf2f7);
          border-bottom: 2px solid #e2e8f0;
        }

        .chapter-title-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          cursor: pointer;
        }

        .chapter-name-input {
          border: none;
          background: transparent;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .chapter-name-input:focus {
          outline: none;
          background: white;
        }

        .question-count {
          color: #718096;
          font-size: 0.9rem;
        }

        .chapter-actions {
          display: flex;
          gap: 0.5rem;
        }

        .chapter-content {
          padding: 1.5rem 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .question-card {
          background: #f7fafc;
          border-radius: 8px;
          padding: 1.5rem;
          border-left: 4px solid #667eea;
        }

        .question-header {
          display: flex;
          gap: 0.75rem;
          align-items: start;
          margin-bottom: 1rem;
        }

        .question-number {
          margin-top: 0.3rem;
          font-weight: 600;
          color: #667eea;
          min-width: 30px;
        }

        .question-content {
          flex: 1;
        }

        .question-text {
          margin: 0 0 0.5rem 0;
          color: #2d3748;
          font-size: 1.2rem;
          line-height: 1.6;
        }

        .question-hint {
          margin: 0;
          padding: 0.5rem 1rem;
          background: #fffaf0;
          border-left: 3px solid #ed8936;
          border-radius: 4px;
          color: #744210;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .question-actions {
          display: flex;
          gap: 0.5rem;
        }

        .answers-display {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-left: 30px;
        }

        .answer-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          background: white;
          border-radius: 6px;
          border: 2px solid #e2e8f0;
          transition: all 0.2s;
        }

        .answer-option.correct {
          background: #f0fff4;
          border-color: #48bb78;
        }

        .answer-label {
          font-weight: 600;
          color: #4a5568;
          min-width: 25px;
        }

        .answer-text {
          flex: 1;
          color: #2d3748;
        }

        .check-icon {
          color: #48bb78;
        }

        .question-form {
          background: #edf2f7;
          padding: 1.5rem;
          border-radius: 8px;
        }

        .question-form h3 {
          margin: 0 0 1rem 0;
          color: #2d3748;
        }

        .question-input,
        .hint-input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #cbd5e0;
          border-radius: 6px;
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .hint-input {
          background: #fffaf0;
          border-color: #f6ad55;
        }

        .question-input:focus,
        .hint-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .answers-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .answer-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .answer-input {
          flex: 1;
          padding: 0.75rem;
          border: 2px solid #cbd5e0;
          border-radius: 6px;
          font-size: 0.95rem;
        }

        .answer-input:focus {
          outline: none;
          border-color: #667eea;
        }

        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          color: #4a5568;
          font-weight: 500;
        }

        .checkbox-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .form-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
        }

        .btn-primary,
        .btn-secondary,
        .btn-icon {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary {
          background: #667eea;
          color: white;
        }

        .btn-primary:hover {
          background: #5568d3;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: #e2e8f0;
          color: #4a5568;
        }

        .btn-secondary:hover {
          background: #cbd5e0;
        }

        .btn-icon {
          padding: 0.5rem;
          min-width: 36px;
          justify-content: center;
        }

        .btn-quiz {
          background: #9f7aea;
          color: white;
        }

        .btn-quiz:hover {
          background: #805ad5;
        }

        .btn-success {
          background: #48bb78;
          color: white;
        }

        .btn-success:hover {
          background: #38a169;
        }

        .btn-warning {
          background: #ed8936;
          color: white;
        }

        .btn-warning:hover {
          background: #dd6b20;
        }

        .btn-danger {
          background: #f56565;
          color: white;
        }

        .btn-danger:hover {
          background: #e53e3e;
        }

        @media (max-width: 768px) {
          .quiz-manager {
            padding: 1rem;
          }

          .header h1 {
            font-size: 1.3rem;
          }

          .chapter-name-input {
            font-size: 1rem;
          }

          .answer-item {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
};

export default QuizManager;
