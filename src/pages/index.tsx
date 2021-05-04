import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-20">
        <div className="rounded-full box-border w-60 py-4 mx-20 border-4 ">
          <div className="text-center text-2xl">Q%A</div>
        </div>
        <div className="flex justify-around py-8">
          <Link href="/#question1">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q1.どのくらいの頻度で活動すればいいの？
            </div>
          </Link>
          <Link href="/#question2">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q2.お金はかかるの？
            </div>
          </Link>
          <Link href="/#question3">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q3.どうやったらサークルに参加できるの？
            </div>
          </Link>
          <Link href="/#question4">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q4.どんな活動をしているの？
            </div>
          </Link>
        </div>
        <div className="flex justify-around">
          <Link href="/#question5">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q5.全くプログラミングについて知らないけど大丈夫？
            </div>
          </Link>
          <Link href="/#question6">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q6.兼部、兼サークルはできるの？
            </div>
          </Link>
          <Link href="/#question7">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q7.将来役に立つ？
            </div>
          </Link>
          <Link href="/#question8">
            <div className="rounded-3xl box-border w-60 h-40 p-4 border-4 object-center text-2xl cursor-pointer">
              Q8.どのくらいの期間でプログラミングできるようになるの？
            </div>
          </Link>
        </div>
        <div className="justify-start text-3xl pt-4" id="question1">
          Q1.どのくらいの頻度で活動すればいいの？
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
      </div>
    </>
  );
};
export default Home;
