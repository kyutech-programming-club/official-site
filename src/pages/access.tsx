import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className ="bg-gray-100">
        <div className = "grid grid-cols-3 divide-x divide-green-500">
            <div className = "mt-4 ml-8 allowfullscreen= loading=lazy rounded" >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.8916167030557!2d130.83807751521098!3d33.89244508064968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543b880c54d9fbf%3A0x81a7235c1718eb15!2z5Lmd5bee5bel5qWt5aSn5a2mIOaIuOeVkeOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1624593937875!5m2!1sja!2sjp"  width={625} height={500}  loading="lazy"></iframe>
            </div>
          {/* <div className = "text-center ml-40 mt-40">
            <p className = "text-left  text-red-600 text-3xl border-t-4 border-b-4">九州工業大学（戸畑キャンパス）</p>
            <p className = "text-right text-x1 mt-4">福岡県北九州市戸畑区仙水町１－１</p>
            <h1 className = "text-left text-2xl mt-4">九州工大前駅から徒歩５分</h1>
          </div> */}
        {/* </div> */}
        {/* <div className = "flex"> */}
            <div className = "leading-6 mr-16 mt-4 absolute right-0  up-0 rounded-lg">
              <img src = "https://th.bing.com/th/id/Re16731aece2a8b7dc190cc0a553520c2?rik=wyIUXbY4pFuw0Q&riu=http%3a%2f%2fwww.kyutech.ac.jp%2farchives%2f001%2f201705%2flarge-c704a05ade16979e2874f769ff5358d6.jpg&ehk=9DuJqU%2f5MWyIRuB%2bWTE3BQL7D0BczU%2bCVEcWgoIWxGk%3d&risl=&pid=ImgRaw" width={500} height={200}/>
            </div>
          {/* <div className ="texe-center ml-16 mt-40">
            <h1 className= "text-3xl text-left  text-red-600 border-t-4 border-b-4">物作り工房の場所</h1>
            <p className= "text-x1 mt-16">東門から入ってすぐの建物</p>
            <p className= "text-x1 mt-4">＊右図の６２番</p>
          </div> */}
        </div>
        <div className = "grid grid-cols-2 divide-x-40 divide-green-500">
          <div className = "text-center ml-8 mt-16">
              <p className = "text-left  text-red-600 text-3xl border-t-4 border-b-4">九州工業大学（戸畑キャンパス）</p>
              <p className = "text-left text-x1 mt-4">福岡県北九州市戸畑区仙水町１－１</p>
              <h1 className = "text-left text-2xl mt-4">九州工大前駅から徒歩５分</h1>
          </div>
          <div className ="texe-center ml-16 mt-16">
            <h1 className= "text-3xl text-left  text-red-600 border-t-4 border-b-4">物作り工房の場所</h1>
            <p className= "text-x1 mt-8">東門から入ってすぐの建物</p>
            <p className= "text-x1 mt-4">＊右図の６２番</p>
          </div>
        </div>
            <h1 className = " text-2xl mt-8 mt-24 mb-16 text-center ">九工大やそれ以外の方でも、お待ちしています</h1>
            {/* <div className = "h-32 w-32 p-4 absolute top-0 right-0 h-32 w-16...">
                <a className="twitter-timeline" href="https://twitter.com/kyutech_proken?ref_src=twsrc%5Etfw">Tweets by kyutech_proken</a> 
                <script async  src="https://platform.twitter.com/widgets.js"  charSet="utf-8" ></script>
            </div> */}
      </div>
    </>
  );
};
export default Home;
