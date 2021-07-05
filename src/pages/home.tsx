import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import { contents } from '../datas/contentitems';
import { contenttype } from '../types/contenttype';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-28">
        <div className="font-mono">
          <div className="text-center text-6xl py-20">独学で何でもできる！</div>
          <div className="text-center text-3xl py-5 ">活動内容</div>
          <div className="text-center text-2xl px-5">
            <div>
              毎日放課後に、自由に個人作業をしています。
              毎週金曜日にはもくもく会があります。
              「プログラミングがしたいけど、何をすれば？」
              「みんなでやると捗る！」
              という人たちが集まって、お互い分からないことがあれば教え合いながら楽しく作業しています。
              その他、やりたい人たちで集まってプロジェクトを進めています。
            </div>
          </div>

          <div className="text-3xl py-5 flex text-center items-stretch">
            <div className="flex-1">web開発</div>
            <div className="flex-1">ゲームクリエイト</div>
            <div className="flex-1">アプリ開発</div>
          </div>

          <div className="text-center text-3xl py-5 ">イベント</div>

          <div>
            {contents.map((item: contenttype) => (
              <div className={item.position}>
                <div className="title">{item.title}</div>
                <div className="message">{item.message}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
