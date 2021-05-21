import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />

      <div className="font-mono">
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

        <div className="text-3xl">
          <div className="inline-brock">
            <p className="container mx-aut"></p>
            <p className="py-5 pl-10">・web開発</p>
          </div>

          <p className="py-5 pl-15">・ゲームクリエイト</p>
          <p className="py-5 pl-15">・アプリ開発</p>
        </div>

        <div className="rounded-l-full relative">
          <div className="text-center text-3xl my-5 abusolute">もくもく会</div>
          <div className="text-center text-2xl mx-2 abusolute">
            <p>週に1回集まって個人開発やグループ開発に取り組みます。</p>
            <p>名目上の会で基本的に自由参加です。</p>
          </div>
        </div>

        <div className="rounded-r-full relative">
          <div className="text-center text-3xl my-5">LT会</div>
          <div className="text-center  text-2xl mx-2">
            <p>LT会とは、ライトニングトークの略で短いプレゼンのことです。</p>
            <p>月に一度行われ、プレゼンの内容は自由です。</p>
            <p>
              主な目的は情報交換や進捗の共有、そしてプレゼンスキルアップです。
            </p>
            <p>聞くだけの参加も可能です。</p>
          </div>
        </div>

        <div className="rounded-l-full relative">
          <div className="text-center text-3xl my-5">ハッカソン</div>
          <div className="text-center text-2xl mx-2">
            <p>
              ハッカソン(Hackathon)とはハック(Hack)とマラソン(Marathon)を合わせた混成語です。
            </p>
            <p>限られた時間で企画、開発、発表までを行い、成果を競います。</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
