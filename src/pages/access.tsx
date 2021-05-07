import 'tailwindcss/tailwind.css';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className = "border:0  allowfullscreen= loading=lazy" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.891616703055!2d130.83807751486353!3d33.892445080649686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3543b880c54d9fbf%3A0x81a7235c1718eb15!2z5Lmd5bee5bel5qWt5aSn5a2mIOaIuOeVkeOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1619665568554!5m2!1sja!2sjp"  width={625} height={450}  loading="lazy"></iframe>
      </div>
      <div className = "absolute top-16 right-0 loading=lazy...">
        <img src = "https://th.bing.com/th/id/Re16731aece2a8b7dc190cc0a553520c2?rik=wyIUXbY4pFuw0Q&riu=http%3a%2f%2fwww.kyutech.ac.jp%2farchives%2f001%2f201705%2flarge-c704a05ade16979e2874f769ff5358d6.jpg&ehk=9DuJqU%2f5MWyIRuB%2bWTE3BQL7D0BczU%2bCVEcWgoIWxGk%3d&risl=&pid=ImgRaw" width={625} height={200}/>
      </div>
      <p className = "leading-6 ml-6">九州工業大学（戸畑キャンパス）</p>
      <p className = "leading-6 ml-6">福岡県北九州市戸畑区仙水町１－１</p>
      <h1 className = "text-2xl leading-loose mt-16 ml-16">九州工大前駅から徒歩５分</h1>
      <h1 className = "text-2xl leading-loose mt-8 text-center">九工大やそれ以外の方でも、お待ちしています</h1>
      <div className = "h-32 w-32 p-4 absolute top-0 right-0 h-16 w-16...">
          <a className="twitter-timeline" href="https://twitter.com/kyutech_proken?ref_src=twsrc%5Etfw">Tweets by kyutech_proken</a> 
          <script async  src="https://platform.twitter.com/widgets.js"  charSet="utf-8" ></script>
      </div>

    </>
  );
};
export default Home;
