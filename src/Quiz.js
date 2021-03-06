import quiz1 from './image/quiz1.jpg'
import quiz2 from './image/quiz2.jpg'
import quiz3 from './image/quiz3.jpg'

const Quizs = [
  {
    ISBN: "9781617293986",
    title: "세상에서 가장 쉬운 숫자는?",
    imgUrl: quiz1,
    select1: "일이구먼",
    select2: "삼이구먼",
    select3: "십구먼",
    select4: "오구먼",
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    default:true,
    selectCheck:false
  },

  {
    ISBN: "9781617293987",
    title: "밥은 밥인데 못 먹는 밥은?",
    imgUrl: quiz2,
    select1: "식은밥",
    select2: "쉰밥",
    select3: "톱밥",
    select4: "찬밥",
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    default:false,
    selectCheck:false
  },

  {
    ISBN: "9781617293988",
    title: "대기업 그룹의 사장이 죽기 직전, 벽에 글을 남겼다",
    imgUrl: quiz3,
    select1: "비서",
    select2: "친한 비빔밥가게 사장",
    select3: "자신의 아들",
    select4: "친한 고깃집 주인",
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    default:false,
    selectCheck:false
  },
];

export default Quizs;
