import 'tailwindcss/tailwind.css';
import Header from '../components/Header';
import { accontents } from '../datas/accontentitems';
import { contents } from '../datas/contentitems';
import { contenttype } from '../types/contenttype';
import { accontenttype } from '../types/accontenttype';

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-20">
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

          <div className="flex">
            {accontents.map((item: accontenttype) => (
              <div className={item.acposition}>
                <div className="actitle">{item.actitle}</div>
                <div className={item.acposition}></div>
              </div>
            ))}
          </div>

          <div className="text-center text-3xl py-5 ">イベント</div>
          <div className="container">
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
