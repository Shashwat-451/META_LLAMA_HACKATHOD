import { useParams,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "flowbite-react";
import { Link } from "react-router-dom";
const ReviewDoc = () => {
  const { id } = useParams(); 
  const [card, setCard] = useState(null);
  const [drawer, setDrawer] = useState(false);


  useEffect(() => {

    const cardData = {
      1: { id: 1, title: "Card 1", description: "Detailed info about Card 1" },
      2: { id: 2, title: "Card 2", description: "Detailed info about Card 2" },
    };
    setCard(cardData[id]); 
  }, [id]);

 const navigate=useNavigate()

  return (
    <>
      
        <div
          className="hs-overlay hs-overlay-open:translate-x-0 fixed top-0 right-0 transition-all duration-300 transform h-full w-[25vw] z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700 border-l-2 overflow-y-auto"
          role="dialog"
          tabIndex="-1"
        >
          {/* <button
            type="button"
            className="size-8 mt-4 ml-4 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-black text-justify hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600"
            onClick={() => {
              setDrawer(false);
            }}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button> */}
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700 mt-8">
            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-black shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Errors
              <span class="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-red-500 text-white">
                5
              </span>
            </button>

            <button
              type="button"
              class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Recommendations
              <span class="inline-flex items-center py-0.5 px-1.5 rounded-full text-xs font-medium bg-yellow-500 text-white">
                10
              </span>
            </button>
          </div>

          <div className="errors flex flex-col gap-5">
            <div className="p-4 border-b-2">
              <p className="text-black text-justify dark:text-neutral-400 space-y-0 space-x-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
              </p>
              <div className="flex gap-3 mt-5 ">
                <Link className="text-blue-500 font-bold">Sources</Link>
                <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-black text-justify dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-black text-justify dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-black text-justify dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-black text-justify dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-black text-justify dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            <div className="p-4 border-b-2">
              <p className="text-black text-justify dark:text-neutral-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sunt amet porro veritatis quaerat, incidunt cum vel! Ex sunt minima fugit quidem consequatur enim illo assumenda excepturi officiis placeat omnis, in labore unde, eum suscipit saepe voluptate soluta perspiciatis odit minus aperiam magni. Molestiae quam quia perferendis aliquam! Eius, commodi?
              </p>
              <div className="flex gap-3 mt-5 ">
              <Link className="text-blue-500 font-bold">Sources</Link>
              <Link className="text-yellow-500 ml-2 font-bold">Recommendations</Link>
              </div>
            </div>
            
          </div>
        </div>
    

      <div className="paragraphs w-[70%] ">
        
        
         <div className="heading">
         <h2 class="ml-10 mt-16 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Document Review</h2>
         </div>

        

        <div style={{ padding: "20px", margin: "20px" }}>
        
           
           
           <ButtonGroup className="ml-[670px] flex gap-3 mb-8">
            <Button onClick={() => {setDrawer(true)}} color="gray">Analyze</Button>
            <Button color="gray">Edit</Button>
            <Button color="gray">Comment</Button>
            <Button onClick={()=>{navigate("/chunkmode")}} color="gray">Chunk</Button>
          </ButtonGroup>

          
        
          <div className="para ">
            <p className="mb-5 text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              harum vitae dolorem ex? Unde alias pariatur ullam placeat,
              expedita ut repudiandae porro tempore nobis, adipisci doloremque
              illo, ad aliquid magni aliquam nisi eveniet. Doloribus
              reprehenderit dolores, cupiditate ullam voluptatem cum sapiente
              laborum tempore earum perferendis quas aperiam magnam reiciendis
              quod repudiandae ab soluta voluptatum laboriosam facere ad nostrum
              inventore dolorum accusantium. Ab quaerat tempore excepturi iusto
              voluptate sequi nulla possimus alias totam? Voluptatum voluptas
              excepturi molestias, temporibus nobis fugiat dolores unde
              necessitatibus minus ad accusamus quia laboriosam dolore
              architecto sint expedita voluptatem officia sapiente incidunt
              ducimus. Sint accusantium qui saepe suscipit, ullam obcaecati
              eligendi facere iusto ex quaerat, quo autem quae maxime recusandae
              dolorum architecto incidunt fugit laborum laboriosam! Repudiandae
              dicta suscipit id velit magni aliquid, tenetur, soluta ratione
              quam sequi molestias quia cupiditate quae fuga! Ut vero cumque quo
              debitis repellendus eos? Omnis velit quaerat eius iusto?
              Voluptatibus rerum sint dolore ea maxime quo provident. Aperiam
              officia perferendis nihil recusandae, praesentium commodi debitis
              doloribus tempore repellat eum molestiae nostrum ipsum? Nihil
              nobis, dolorum architecto quos est cupiditate, provident,
              reiciendis molestiae ipsum vero asperiores hic vitae. Maiores quam
              ratione asperiores neque facere molestiae voluptatem dolorum
              libero odio! Aliquid in quae expedita qui, voluptas odio facilis
              porro laudantium placeat magni eveniet reprehenderit dicta
              accusantium. Voluptatum eius molestiae maxime voluptatem ab odit
              animi? Autem eaque non iure et tenetur? Quas optio sed veritatis
              ullam. Illo beatae ex doloribus cupiditate quod, ullam labore
              expedita pariatur reprehenderit porro odio non illum, soluta
              perferendis incidunt itaque quam vero nihil eius, alias quibusdam
              repellat facilis adipisci. Iusto a voluptatem illum soluta quo
              culpa obcaecati aliquid quae nisi, praesentium ex omnis autem,
              itaque labore fugiat quis facilis veritatis tenetur magni officia
              ipsam architecto excepturi. Suscipit perspiciatis, aliquam aut
              quae vitae tempore voluptatum, saepe, accusantium magni labore
              error veniam. Nihil laborum rem, eligendi saepe similique amet est
              quae. Illo molestias necessitatibus rem, sit delectus obcaecati,
              dolores nemo atque esse recusandae ullam eligendi, debitis odit.
              Voluptas fugit illum, quae laborum suscipit veniam accusamus
              adipisci nulla, asperiores maiores est molestias fugiat neque
              quos? Ducimus reiciendis cumque dicta atque, distinctio ipsam
              accusantium voluptatibus asperiores veritatis dolore maxime illo
              veniam a. Impedit quia aperiam reiciendis natus magni facere quo
              nulla dolor optio aliquid molestias eaque voluptatem praesentium
              odit iusto incidunt sit eligendi libero, quam earum fugiat facilis
              voluptas tempora sapiente. Fuga animi pariatur repellat architecto
              optio commodi, dolorum dolor, aut nulla inventore quod. Nulla sed
              impedit vitae distinctio laboriosam temporibus facere unde
              voluptates, sequi placeat similique fugit ipsa quod non expedita
              dolorem quaerat neque inventore voluptate minus! Adipisci
              recusandae hic est pariatur cum possimus eligendi voluptatum
              corrupti deleniti incidunt, quos doloremque optio, nulla dolor
              repudiandae fuga, expedita suscipit at accusantium magnam? Placeat
              asperiores inventore voluptatem dignissimos quis minus deserunt
              praesentium itaque, animi, quas provident laudantium accusamus
              cupiditate, ut molestiae. Deleniti non sunt sed fugit quibusdam
              commodi unde saepe laboriosam deserunt? Ea porro quas, ipsa
              consequuntur soluta suscipit dolore delectus nisi quia repudiandae
              quis, nam magni eos harum vero sapiente, obcaecati sit
              necessitatibus!
            </p>

            <p className="mb-5 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              harum vitae dolorem ex? Unde alias pariatur ullam placeat,
              expedita ut repudiandae porro tempore nobis, adipisci doloremque
              illo, ad aliquid magni aliquam nisi eveniet. Doloribus
              reprehenderit dolores, cupiditate ullam voluptatem cum sapiente
              laborum tempore earum perferendis quas aperiam magnam reiciendis
              quod repudiandae ab soluta voluptatum laboriosam facere ad nostrum
              inventore dolorum accusantium. Ab quaerat tempore excepturi iusto
              voluptate sequi nulla possimus alias totam? Voluptatum voluptas
              excepturi molestias, temporibus nobis fugiat dolores unde
              necessitatibus minus ad accusamus quia laboriosam dolore
              architecto sint expedita voluptatem officia sapiente incidunt
              ducimus. Sint accusantium qui saepe suscipit, ullam obcaecati
              eligendi facere iusto ex quaerat, quo autem quae maxime recusandae
              dolorum architecto incidunt fugit laborum laboriosam! Repudiandae
              dicta suscipit id velit magni aliquid, tenetur, soluta ratione
              quam sequi molestias quia cupiditate quae fuga! Ut vero cumque quo
              debitis repellendus eos? Omnis velit quaerat eius iusto?
              Voluptatibus rerum sint dolore ea maxime quo provident. Aperiam
              officia perferendis nihil recusandae, praesentium commodi debitis
              doloribus tempore repellat eum molestiae nostrum ipsum? Nihil
              nobis, dolorum architecto quos est cupiditate, provident,
              reiciendis molestiae ipsum vero asperiores hic vitae. Maiores quam
              ratione asperiores neque facere molestiae voluptatem dolorum
              libero odio! Aliquid in quae expedita qui, voluptas odio facilis
              porro laudantium placeat magni eveniet reprehenderit dicta
              accusantium. Voluptatum eius molestiae maxime voluptatem ab odit
              animi? Autem eaque non iure et tenetur? Quas optio sed veritatis
              ullam. Illo beatae ex doloribus cupiditate quod, ullam labore
              expedita pariatur reprehenderit porro odio non illum, soluta
              perferendis incidunt itaque quam vero nihil eius, alias quibusdam
              repellat facilis adipisci. Iusto a voluptatem illum soluta quo
              culpa obcaecati aliquid quae nisi, praesentium ex omnis autem,
              itaque labore fugiat quis facilis veritatis tenetur magni officia
              ipsam architecto excepturi. Suscipit perspiciatis, aliquam aut
              quae vitae tempore voluptatum, saepe, accusantium magni labore
              error veniam. Nihil laborum rem, eligendi saepe similique amet est
              quae. Illo molestias necessitatibus rem, sit delectus obcaecati,
              dolores nemo atque esse recusandae ullam eligendi, debitis odit.
              Voluptas fugit illum, quae laborum suscipit veniam accusamus
              adipisci nulla, asperiores maiores est molestias fugiat neque
              quos? Ducimus reiciendis cumque dicta atque, distinctio ipsam
              accusantium voluptatibus asperiores veritatis dolore maxime illo
              veniam a. Impedit quia aperiam reiciendis natus magni facere quo
              nulla dolor optio aliquid molestias eaque voluptatem praesentium
              odit iusto incidunt sit eligendi libero, quam earum fugiat facilis
              voluptas tempora sapiente. Fuga animi pariatur repellat architecto
              optio commodi, dolorum dolor, aut nulla inventore quod. Nulla sed
              impedit vitae distinctio laboriosam temporibus facere unde
              voluptates, sequi placeat similique fugit ipsa quod non expedita
              dolorem quaerat neque inventore voluptate minus! Adipisci
              recusandae hic est pariatur cum possimus eligendi voluptatum
              corrupti deleniti incidunt, quos doloremque optio, nulla dolor
              repudiandae fuga, expedita suscipit at accusantium magnam? Placeat
              asperiores inventore voluptatem dignissimos quis minus deserunt
              praesentium itaque, animi, quas provident laudantium accusamus
              cupiditate, ut molestiae. Deleniti non sunt sed fugit quibusdam
              commodi unde saepe laboriosam deserunt? Ea porro quas, ipsa
              consequuntur soluta suscipit dolore delectus nisi quia repudiandae
              quis, nam magni eos harum vero sapiente, obcaecati sit
              necessitatibus!
            </p>
            <p className="mb-5 text-justify">
              repudiandae porro tempore nobis, adipisci doloremque illo, ad
              aliquid magni aliquam nisi eveniet. Doloribus reprehenderit
              dolores, cupiditate ullam voluptatem cum sapiente laborum tempore
              earum perferendis quas aperiam magnam reiciendis quod repudiandae
              ab soluta voluptatum laboriosam facere ad nostrum inventore
              dolorum accusantium. Ab quaerat tempore excepturi iusto voluptate
              sequi nulla possimus alias totam? Voluptatum voluptas excepturi
              molestias, temporibus nobis fugiat dolores unde necessitatibus
              minus ad accusamus quia laboriosam dolore architecto sint expedita
              voluptatem officia sapiente incidunt ducimus. Sint accusantium qui
              saepe suscipit, ullam obcaecati eligendi facere iusto ex quaerat,
              quo autem quae maxime recusandae dolorum architecto incidunt fugit
              laborum laboriosam! Repudiandae dicta suscipit id velit magni
              aliquid, tenetur, soluta ratione quam sequi molestias quia
              cupiditate quae fuga! Ut vero cumque quo debitis repellendus eos?
              Omnis velit quaerat eius iusto? Voluptatibus rerum sint dolore ea
              maxime quo provident. Aperiam officia perferendis nihil
              recusandae, praesentium commodi debitis doloribus tempore repellat
              eum molestiae nostrum ipsum? Nihil nobis, dolorum architecto quos
              est cupiditate, provident, reiciendis molestiae ipsum vero
              asperiores hic vitae. Maiores quam ratione asperiores neque facere
              molestiae voluptatem dolorum libero odio! Aliquid in quae expedita
              qui, voluptas odio facilis porro laudantium placeat magni eveniet
              reprehenderit dicta accusantium. Voluptatum eius molestiae maxime
              voluptatem ab odit animi? Autem eaque non iure et tenetur? Quas
              optio sed veritatis ullam. Illo beatae ex doloribus cupiditate
              quod, ullam labore expedita pariatur reprehenderit porro odio non
              illum, soluta perferendis incidunt itaque quam vero nihil eius,
              alias quibusdam repellat facilis adipisci. Iusto a voluptatem
              illum soluta quo culpa obcaecati aliquid quae nisi, praesentium ex
              omnis autem, itaque labore fugiat quis facilis veritatis tenetur
              magni officia ipsam architecto excepturi. Suscipit perspiciatis,
              aliquam aut quae vitae tempore voluptatum, saepe, accusantium
              magni labore error veniam. Nihil laborum rem, eligendi saepe
              similique amet est quae. Illo molestias necessitatibus rem, sit
              delectus obcaecati, dolores nemo atque esse recusandae ullam
              eligendi, debitis odit. Voluptas fugit illum, quae laborum
              suscipit veniam accusamus adipisci nulla, asperiores maiores est
              molestias fugiat neque quos? Ducimus reiciendis cumque dicta
              atque, distinctio ipsam accusantium voluptatibus asperiores
              veritatis dolore maxime illo veniam a. Impedit quia aperiam
              reiciendis natus magni facere quo nulla dolor optio aliquid
              molestias eaque voluptatem praesentium odit iusto incidunt sit
              eligendi libero, quam earum fugiat facilis voluptas tempora
              sapiente. Fuga animi pariatur repellat architecto optio commodi,
              dolorum dolor, aut nulla inventore quod. Nulla sed impedit vitae
              distinctio laboriosam temporibus facere unde voluptates, sequi
              placeat similique fugit ipsa quod non expedita dolorem quaerat
              neque inventore voluptate minus! Adipisci recusandae hic est
              pariatur cum possimus eligendi voluptatum corrupti deleniti
              incidunt, quos doloremque optio, nulla dolor repudiandae fuga,
              expedita suscipit at accusantium magnam? Placeat asperiores
              inventore voluptatem dignissimos quis minus deserunt praesentium
              itaque, animi, quas provident laudantium accusamus cupiditate, ut
              molestiae. Deleniti non sunt sed fugit quibusdam commodi unde
              saepe laboriosam deserunt? Ea porro quas, ipsa consequuntur soluta
              suscipit dolore delectus nisi quia repudiandae quis, nam magni eos
              harum vero sapiente, obcaecati sit necessitatibus!
            </p>
            <p className="mb-5 text-justify">
              repudiandae porro tempore nobis, adipisci doloremque illo, ad
              aliquid magni aliquam nisi eveniet. Doloribus reprehenderit
              dolores, cupiditate ullam voluptatem cum sapiente laborum tempore
              earum perferendis quas aperiam magnam reiciendis quod repudiandae
              ab soluta voluptatum laboriosam facere ad nostrum inventore
              dolorum accusantium. Ab quaerat tempore excepturi iusto voluptate
              sequi nulla possimus alias totam? Voluptatum voluptas excepturi
              molestias, temporibus nobis fugiat dolores unde necessitatibus
              minus ad accusamus quia laboriosam dolore architecto sint expedita
              voluptatem officia sapiente incidunt ducimus. Sint accusantium qui
              saepe suscipit, ullam obcaecati eligendi facere iusto ex quaerat,
              quo autem quae maxime recusandae dolorum architecto incidunt fugit
              laborum laboriosam! Repudiandae dicta suscipit id velit magni
              aliquid, tenetur, soluta ratione quam sequi molestias quia
              cupiditate quae fuga! Ut vero cumque quo debitis repellendus eos?
              Omnis velit quaerat eius iusto? Voluptatibus rerum sint dolore ea
              maxime quo provident. Aperiam officia perferendis nihil
              recusandae, praesentium commodi debitis doloribus tempore repellat
              eum molestiae nostrum ipsum? Nihil nobis, dolorum architecto quos
              est cupiditate, provident, reiciendis molestiae ipsum vero
              asperiores hic vitae. Maiores quam ratione asperiores neque facere
              molestiae voluptatem dolorum libero odio! Aliquid in quae expedita
              qui, voluptas odio facilis porro laudantium placeat magni eveniet
              reprehenderit dicta accusantium. Voluptatum eius molestiae maxime
              voluptatem ab odit animi? Autem eaque non iure et tenetur? Quas
              optio sed veritatis ullam. Illo beatae ex doloribus cupiditate
              quod, ullam labore expedita pariatur reprehenderit porro odio non
              illum, soluta perferendis incidunt itaque quam vero nihil eius,
              alias quibusdam repellat facilis adipisci. Iusto a voluptatem
              illum soluta quo culpa obcaecati aliquid quae nisi, praesentium ex
              omnis autem, itaque labore fugiat quis facilis veritatis tenetur
              magni officia ipsam architecto excepturi. Suscipit perspiciatis,
              aliquam aut quae vitae tempore voluptatum, saepe, accusantium
              magni labore error veniam. Nihil laborum rem, eligendi saepe
              similique amet est quae. Illo molestias necessitatibus rem, sit
              delectus obcaecati, dolores nemo atque esse recusandae ullam
              eligendi, debitis odit. Voluptas fugit illum, quae laborum
              suscipit veniam accusamus adipisci nulla, asperiores maiores est
              molestias fugiat neque quos? Ducimus reiciendis cumque dicta
              atque, distinctio ipsam accusantium voluptatibus asperiores
              veritatis dolore maxime illo veniam a. Impedit quia aperiam
              reiciendis natus magni facere quo nulla dolor optio aliquid
              molestias eaque voluptatem praesentium odit iusto incidunt sit
              eligendi libero, quam earum fugiat facilis voluptas tempora
              sapiente. Fuga animi pariatur repellat architecto optio commodi,
              dolorum dolor, aut nulla inventore quod. Nulla sed impedit vitae
              distinctio laboriosam temporibus facere unde voluptates, sequi
              placeat similique fugit ipsa quod non expedita dolorem quaerat
              neque inventore voluptate minus! Adipisci recusandae hic est
              pariatur cum possimus eligendi voluptatum corrupti deleniti
              incidunt, quos doloremque optio, nulla dolor repudiandae fuga,
              expedita suscipit at accusantium magnam? Placeat asperiores
              inventore voluptatem dignissimos quis minus deserunt praesentium
              itaque, animi, quas provident laudantium accusamus cupiditate, ut
              molestiae. Deleniti non sunt sed fugit quibusdam commodi unde
              saepe laboriosam deserunt? Ea porro quas, ipsa consequuntur soluta
              suscipit dolore delectus nisi quia repudiandae quis, nam magni eos
              harum vero sapiente, obcaecati sit necessitatibus!
            </p>

            <p className="mb-5 text-justify">
              repudiandae porro tempore nobis, adipisci doloremque illo, ad
              aliquid magni aliquam nisi eveniet. Doloribus reprehenderit
              dolores, cupiditate ullam voluptatem cum sapiente laborum tempore
              earum perferendis quas aperiam magnam reiciendis quod repudiandae
              ab soluta voluptatum laboriosam facere ad nostrum inventore
              dolorum accusantium. Ab quaerat tempore excepturi iusto voluptate
              sequi nulla possimus alias totam? Voluptatum voluptas excepturi
              molestias, temporibus nobis fugiat dolores unde necessitatibus
              minus ad accusamus quia laboriosam dolore architecto sint expedita
              voluptatem officia sapiente incidunt ducimus. Sint accusantium qui
              saepe suscipit, ullam obcaecati eligendi facere iusto ex quaerat,
              quo autem quae maxime recusandae dolorum architecto incidunt fugit
              laborum laboriosam! Repudiandae dicta suscipit id velit magni
              aliquid, tenetur, soluta ratione quam sequi molestias quia
              cupiditate quae fuga! Ut vero cumque quo debitis repellendus eos?
              Omnis velit quaerat eius iusto? Voluptatibus rerum sint dolore ea
              maxime quo provident. Aperiam officia perferendis nihil
              recusandae, praesentium commodi debitis doloribus tempore repellat
              eum molestiae nostrum ipsum? Nihil nobis, dolorum architecto quos
              est cupiditate, provident, reiciendis molestiae ipsum vero
              asperiores hic vitae. Maiores quam ratione asperiores neque facere
              molestiae voluptatem dolorum libero odio! Aliquid in quae expedita
              qui, voluptas odio facilis porro laudantium placeat magni eveniet
              reprehenderit dicta accusantium. Voluptatum eius molestiae maxime
              voluptatem ab odit animi? Autem eaque non iure et tenetur? Quas
              optio sed veritatis ullam. Illo beatae ex doloribus cupiditate
              quod, ullam labore expedita pariatur reprehenderit porro odio non
              illum, soluta perferendis incidunt itaque quam vero nihil eius,
              alias quibusdam repellat facilis adipisci. Iusto a voluptatem
              illum soluta quo culpa obcaecati aliquid quae nisi, praesentium ex
              omnis autem, itaque labore fugiat quis facilis veritatis tenetur
              magni officia ipsam architecto excepturi. Suscipit perspiciatis,
              aliquam aut quae vitae tempore voluptatum, saepe, accusantium
              magni labore error veniam. Nihil laborum rem, eligendi saepe
              similique amet est quae. Illo molestias necessitatibus rem, sit
              delectus obcaecati, dolores nemo atque esse recusandae ullam
              eligendi, debitis odit. Voluptas fugit illum, quae laborum
              suscipit veniam accusamus adipisci nulla, asperiores maiores est
              molestias fugiat neque quos? Ducimus reiciendis cumque dicta
              atque, distinctio ipsam accusantium voluptatibus asperiores
              veritatis dolore maxime illo veniam a. Impedit quia aperiam
              reiciendis natus magni facere quo nulla dolor optio aliquid
              molestias eaque voluptatem praesentium odit iusto incidunt sit
              eligendi libero, quam earum fugiat facilis voluptas tempora
              sapiente. Fuga animi pariatur repellat architecto optio commodi,
              dolorum dolor, aut nulla inventore quod. Nulla sed impedit vitae
              distinctio laboriosam temporibus facere unde voluptates, sequi
              placeat similique fugit ipsa quod non expedita dolorem quaerat
              neque inventore voluptate minus! Adipisci recusandae hic est
              pariatur cum possimus eligendi voluptatum corrupti deleniti
              incidunt, quos doloremque optio, nulla dolor repudiandae fuga,
              expedita suscipit at accusantium magnam? Placeat asperiores
              inventore voluptatem dignissimos quis minus deserunt praesentium
              itaque, animi, quas provident laudantium accusamus cupiditate, ut
              molestiae. Deleniti non sunt sed fugit quibusdam commodi unde
              saepe laboriosam deserunt? Ea porro quas, ipsa consequuntur soluta
              suscipit dolore delectus nisi quia repudiandae quis, nam magni eos
              harum vero sapiente, obcaecati sit necessitatibus!
            </p>

            <p className="mb-5 text-justify">
              repudiandae porro tempore nobis, adipisci doloremque illo, ad
              aliquid magni aliquam nisi eveniet. Doloribus reprehenderit
              dolores, cupiditate ullam voluptatem cum sapiente laborum tempore
              earum perferendis quas aperiam magnam reiciendis quod repudiandae
              ab soluta voluptatum laboriosam facere ad nostrum inventore
              dolorum accusantium. Ab quaerat tempore excepturi iusto voluptate
              sequi nulla possimus alias totam? Voluptatum voluptas excepturi
              molestias, temporibus nobis fugiat dolores unde necessitatibus
              minus ad accusamus quia laboriosam dolore architecto sint expedita
              voluptatem officia sapiente incidunt ducimus. Sint accusantium qui
              saepe suscipit, ullam obcaecati eligendi facere iusto ex quaerat,
              quo autem quae maxime recusandae dolorum architecto incidunt fugit
              laborum laboriosam! Repudiandae dicta suscipit id velit magni
              aliquid, tenetur, soluta ratione quam sequi molestias quia
              cupiditate quae fuga! Ut vero cumque quo debitis repellendus eos?
              Omnis velit quaerat eius iusto? Voluptatibus rerum sint dolore ea
              maxime quo provident. Aperiam officia perferendis nihil
              recusandae, praesentium commodi debitis doloribus tempore repellat
              eum molestiae nostrum ipsum? Nihil nobis, dolorum architecto quos
              est cupiditate, provident, reiciendis molestiae ipsum vero
              asperiores hic vitae. Maiores quam ratione asperiores neque facere
              molestiae voluptatem dolorum libero odio! Aliquid in quae expedita
              qui, voluptas odio facilis porro laudantium placeat magni eveniet
              reprehenderit dicta accusantium. Voluptatum eius molestiae maxime
              voluptatem ab odit animi? Autem eaque non iure et tenetur? Quas
              optio sed veritatis ullam. Illo beatae ex doloribus cupiditate
              quod, ullam labore expedita pariatur reprehenderit porro odio non
              illum, soluta perferendis incidunt itaque quam vero nihil eius,
              alias quibusdam repellat facilis adipisci. Iusto a voluptatem
              illum soluta quo culpa obcaecati aliquid quae nisi, praesentium ex
              omnis autem, itaque labore fugiat quis facilis veritatis tenetur
              magni officia ipsam architecto excepturi. Suscipit perspiciatis,
              aliquam aut quae vitae tempore voluptatum, saepe, accusantium
              magni labore error veniam. Nihil laborum rem, eligendi saepe
              similique amet est quae. Illo molestias necessitatibus rem, sit
              delectus obcaecati, dolores nemo atque esse recusandae ullam
              eligendi, debitis odit. Voluptas fugit illum, quae laborum
              suscipit veniam accusamus adipisci nulla, asperiores maiores est
              molestias fugiat neque quos? Ducimus reiciendis cumque dicta
              atque, distinctio ipsam accusantium voluptatibus asperiores
              veritatis dolore maxime illo veniam a. Impedit quia aperiam
              reiciendis natus magni facere quo nulla dolor optio aliquid
              molestias eaque voluptatem praesentium odit iusto incidunt sit
              eligendi libero, quam earum fugiat facilis voluptas tempora
              sapiente. Fuga animi pariatur repellat architecto optio commodi,
              dolorum dolor, aut nulla inventore quod. Nulla sed impedit vitae
              distinctio laboriosam temporibus facere unde voluptates, sequi
              placeat similique fugit ipsa quod non expedita dolorem quaerat
              neque inventore voluptate minus! Adipisci recusandae hic est
              pariatur cum possimus eligendi voluptatum corrupti deleniti
              incidunt, quos doloremque optio, nulla dolor repudiandae fuga,
              expedita suscipit at accusantium magnam? Placeat asperiores
              inventore voluptatem dignissimos quis minus deserunt praesentium
              itaque, animi, quas provident laudantium accusamus cupiditate, ut
              molestiae. Deleniti non sunt sed fugit quibusdam commodi unde
              saepe laboriosam deserunt? Ea porro quas, ipsa consequuntur soluta
              suscipit dolore delectus nisi quia repudiandae quis, nam magni eos
              harum vero sapiente, obcaecati sit necessitatibus!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewDoc;
