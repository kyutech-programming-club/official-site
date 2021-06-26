import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { questions } from '../datas/questionItems';
import { QuestionType } from '../types/questionsType';
import { answers } from '../datas/answeritems';
import { AnswerType } from '../types/answerType';
const Home = () => {
  return (
    <>
      <div className="container mx-auto px-20">
        <div className="rounded-full box-border w-60 py-4 mx-20 border-4 ">
          <div className="text-center text-2xl">Q%A</div>
        </div>
<<<<<<< HEAD
        <div className="flex justify-around py-8">
          <div className="Questions">
            {items.map((item: Item) => (
              <Link href={item.id}>
                <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="justify-start text-3xl pt-4" id="question1">
          Q1.どのくらいの頻度で活動すればいいの？
          {questions1.map((item: Question1) => (
=======
        <div className="py-8">
          {questions.map((item: QuestionType) => (
>>>>>>> 2565bdd (apply to other file)
            <Link href={item.id}>
              <div className="questionBox">{item.title}</div>
            </Link>
          ))}
<<<<<<< HEAD
        </div>
        <div className="flex justify-around py-8">
          {questions2.map((item: Question2) => (
            <Link href={item.id}>
              <div className="questionBox">{item.title}</div>
            </Link>
          ))}
        </div>
<<<<<<< HEAD
        <div className="container mx-auto py-6">{items1}</div>
        <div className="container mx-auto py-6">
          <div className="justify-start text-3xl pt-4" id="question1">
            Q1.どのくらいの頻度で活動すればいいの？
          </div>
          <div className="justify-start text-3xl pt-4">A.適当です</div>
        </div>
        <div className="justify-start text-3xl pt-4" id="question2">
          Q2.お金はかかるの？
        </div>
        <div className="justify-start text-3xl pt-4" id="question3">
          Q3.どうやったらサークルに参加できるの？
        </div>
        <div className="justify-start text-3xl pt-4" id="question4">
          Q4.どんな活動をしているの？
        </div>
        <div className="justify-start text-3xl pt-4" id="question5">
          Q5.全くプログラミングについて知らないけど大丈夫？
        </div>
        <div className="justify-start text-3xl pt-4" id="question6">
          Q6.兼部、兼サークルはできるの？
        </div>
        <div className="justify-start text-3xl pt-4" id="question7">
          Q7.将来役に立つ？
        </div>
        <div className="justify-start text-3xl pt-4" id="question8">
          Q8.どのくらいの期間でプログラミングできるようになるの？
        </div>
=======
=======
        </div>
        <div className="container mx-auto py-6">
          {answers.map((item: AnswerType) => (
>>>>>>> 2565bdd (apply to other file)
            <div className="container mx-auto py-6">
              <div className="questionSentence" id={item.id}>
                {item.question}
              </div>
              <div className="answerSentence">{item.answer}</div>
            </div>
<<<<<<< HEAD
>>>>>>> 51e7e4e (add answer sentences)
        <button className="btn">My tailwind button</button>
        <button className="btn-red">My Tailwind Button</button>
=======
          ))}
        </div>
>>>>>>> 2565bdd (apply to other file)
      </div>
    </>
  );
};
export default Home;
<<<<<<< HEAD

type Item = {
  id: string;
  title: string;
};
type Question1 = {
  id: string;
  title: string;
};

const questions1: Question1[] = [
  {
    id: '/#question1',
    title: 'Q1.どのくらいの頻度で活動すればいいの？',
  },
  {
    id: '/#question2',
    title: 'Q2.お金はかかるの？',
  },
  {
    id: '/#question3',
    title: 'Q3.どうやったらサークルに参加できるの？',
  },
  {
    id: '/#question4',
    title: 'Q4.どんな活動をしているの？',
  },
];

type Question2 = {
  id: string;
  title: string;
};

const questions2: Question2[] = [
  {
    id: '/#question5',
    title: 'Q5.全くプログラミングについて知らないけど大丈夫？',
  },
  {
    id: '/#question6',
    title: 'Q6.兼部、兼サークルはできるの？',
  },
  {
<<<<<<< HEAD
    id: '/#question7',
    title: 'Q7.将来役に立つ？',
=======
    id:"/#question7",
    title:'Q7.九工大生以外でも入れるの？'
>>>>>>> 1ffe6f6 (change answer sentences)
  },
  {
    id: '/#question8',
    title: 'Q8.どのくらいの期間でプログラミングできるようになるの？',
  },
];

type Answers = {
  id: string;
  question: string;
  answer: string;
};

const answers: Answers[] = [
  {
<<<<<<< HEAD
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
  },
  {
    id: 'question1',
    question: 'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer: 'A.大丈夫です',
=======
    id:"question1",
    question:'Q1.どのくらいの頻度で活動すればいいの？',
    answer:"A.大丈夫です"
  },
  {
    id:"question2",
    question:'Q2.お金はかかるの？',
    answer:"A.大丈夫です"
  },
  {
    id:"question3",
    question:'Q3.どうやったらサークルに参加できるの？',
    answer:"A.大丈夫です"
  },
  {
    id:"question4",
    question:'Q4.どんな活動をしているの？',
    answer:"A.大丈夫です"
  },
  {
    id:"question5",
    question:'Q5.全くプログラミングについて知らないけど大丈夫？',
    answer:"A.大丈夫です"
  },
  {
    id:"question6",
    question:'Q6.兼部、兼サークルはできるの？',
    answer:"A.大丈夫です"
  },
  {
    id:"question7",
    question:'Q7.九工大生以外でも入れるの',
    answer:"A.大丈夫です"
  },
  {
    id:"question8",
    question:'Q8.どのくらいの期間でプログラミングできるようになるの？',
    answer:"A.大丈夫です"
>>>>>>> 1ffe6f6 (change answer sentences)
  },
];
=======
>>>>>>> 2565bdd (apply to other file)
