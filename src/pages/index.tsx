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
        <button className="btn">My tailwind button</button>
        <button className="btn-red">My Tailwind Button</button>
      </div>
    </>
  );
};
export default Home;

type Item = {
  id: string;
  title: string;
};

const items: Item[] = [
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
  {
    id: '/#question5',
    title: 'Q5.全くプログラミングについて知らないけど大丈夫？',
  },
  {
    id: '/#question6',
    title: 'Q6.兼部、兼サークルはできるの？',
  },
  {
    id: '/#question7',
    title: 'Q7.将来役に立つ？',
  },
  {
    id: '/#question8',
    title: 'Q8.どのくらいの期間でプログラミングできるようになるの？',
  },
];
