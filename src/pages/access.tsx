import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      {/* <div className ="bg-gray-100"> */}
        <div className = "container mx-auto px-8">
          <div className = " allowfullscreen= loading=lazy rounded" >
            <iframe src="https://www.google.com/maps/d/embed?mid=1wvrc3g6CMgesN37YTqRMeYlXEAqAfSl6&hl=ja"  width={625} height={500}  loading="lazy"></iframe>
          </div>
        </div>
          <p className = "text-right absolute top-56 right-60  block">九州工業大学（戸畑キャンパス）</p>
          <p className = "text-right absolute top-64 right-60 block">福岡県北九州市戸畑区仙水町１－１</p>
          <h1 className = "text-2xl text-right absolute top-80 right-56 block">九州工大前駅から徒歩５分</h1>
          <div className = "leading-6 ml-6 absolute right-0 rounded-lg">
            <img src = "https://th.bing.com/th/id/Re16731aece2a8b7dc190cc0a553520c2?rik=wyIUXbY4pFuw0Q&riu=http%3a%2f%2fwww.kyutech.ac.jp%2farchives%2f001%2f201705%2flarge-c704a05ade16979e2874f769ff5358d6.jpg&ehk=9DuJqU%2f5MWyIRuB%2bWTE3BQL7D0BczU%2bCVEcWgoIWxGk%3d&risl=&pid=ImgRaw" width={600} height={300}/>
          </div>
          <h1 className= "text-2xl block ml-40 mt-72">ものつくり工房の場所</h1>
          <p className= "block ml-40 mt-8">東門から入ってすぐの建物</p>
          <p className= "block ml-40">＊右図の６２番</p>
          <h1 className = " text-2xl mt-8 mt-72 mb-16 text-center ">九工大やそれ以外の方でも、お待ちしています</h1>
          {/* <div className = "h-32 w-32 p-4 absolute top-0 right-0 h-32 w-16...">
              <a className="twitter-timeline" href="https://twitter.com/kyutech_proken?ref_src=twsrc%5Etfw">Tweets by kyutech_proken</a> 
              <script async  src="https://platform.twitter.com/widgets.js"  charSet="utf-8" ></script>
          </div> */}
        {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Home;
