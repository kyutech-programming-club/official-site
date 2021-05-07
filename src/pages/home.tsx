import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />

      <div className="text-center text-6xl py-20">独学で何でもできる！</div>
      <div className="text-center text-3xl py-5 ">活動内容</div>
      <div className="text-center text-2xl px-5 ">
        <p>毎日放課後に、自由に個人作業をしています。</p>
        <p>毎週金曜日にはもくもく会があります。</p>
        <p>「プログラミングがしたいけど、何をすれば？」</p>
        <p>「みんなでやると捗る！」</p>
        <p>
          という人たちが集まって、お互い分からないことがあれば教え合いながら楽しく作業しています。
        </p>
        <p>その他、やりたい人たちで集まってプロジェクトを進めています。</p>
      </div>

      <div className="text-start text-3xl py-7 ">
        <div className="inline-brock">
          <p className="container"></p>
          <p className="py-5 pl-15">・web開発</p>
        </div>
        <p className="py-5 pl-15">・ゲームクリエイト</p>
        <p className="py-5 pl-15">・アプリ開発</p>
      </div>

      <div className="rounded-full m-4">
        <div className="text-3xl mb-5">もくもく会</div>
        <div className="text-2xl mx-2">
          <p>週に1回集まって個人開発やグループ開発に取り組みます</p>
          <p>名目上の会で基本的に自由参加です</p>
        </div>
      </div>

      <div className="rounded-full m-4">
        <div className="text-3xl mb-5">LT会</div>
        <div className="text-2xl mx-2">
          <p>LT会とは、ライトニングトークの略で短いプレゼンのことです。</p>
          <p>月に一度行われ、プレゼンの内容は自由です。</p>
          <p>
            主な目的は情報交換や進捗の共有、そしてプレゼンスキルアップです。
          </p>
          <p>聞くだけの参加も可能です。</p>
        </div>
      </div>
    </>
  );
};
export default Home;
