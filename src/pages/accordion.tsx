import Header from '../components/Header';

const Accordion = () => {
    return (
      <>
        <Header />
        <body className="font-sans container">
            <div className="w-full md:w-3/5 mx-auto p-8">
                <p>Opeln <strong>multiple</strong></p>
                <div className="shadow-md">
                    <div className="tab w-full overflow-hidden border-t">
                    <input className="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs"></input>
               <label className="block p-5 leading-normal cursor-pointer" >Label One</label>
               <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
               </div>

                    </div>
                </div>
            </div>
        </body>
        <body className="bg-grey-300 h-full">
            <ul className="block w-11/12 my-4 mx-auto" x-data="{selected:null}">
                <li className="flex align-center flex-col">
                    
                </li>
                </ul> 
        </body>
      </>
    );
  };
  export default Accordion;
