import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import { questions } from '../datas/questionItems';
import { QuestionType } from '../types/questionsType';
import { answers } from '../datas/answeritems';
import { AnswerType } from '../types/answerType';
const Home = () => {
  return (
    <>
      <div className="container mx-auto px-28">
        <div className="rounded-full box-border w-60 py-4 mx-20 border-4 border-blue border-opacity-75">
          <div className="text-center text-2xl">Q%A</div>
        </div>
        <div className="py-8 space-y-4">
          {questions.map((item: QuestionType) => (
            <Link href={item.id}>
              <div className="questionBox">{item.title}</div>
            </Link>
          ))}
        </div>
        <div className="container mx-auto py-6">
          {answers.map((item: AnswerType) => (
            <div className="container mx-auto py-6">
              <div className="questionSentence" id={item.id}>
                {item.question}
              </div>
              <div className="answerSentence">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
