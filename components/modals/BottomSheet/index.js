// import {useRef, useState} from 'react';
// import Sheet from 'react-modal-sheet';

// export default function BottomSheet() {
//   const [isOpen, setOpen] = useState(false);
//   const ref = useRef();
//   const snapTo = (i) => ref.current?.snapTo(i);

//   return (
//     <>
//       <button onClick={() => setOpen(true)}>Open sheet</button>
//       <div className="bottom-sheet">
//         <Sheet snapPoints={[600, 400, 100, 0]} initialSnap={1} onSnap={(snapIndex) => console.log('> Current snap point index:', snapIndex)} isOpen={isOpen} onClose={() => setOpen(false)}>
//           <Sheet.Container>
//             <Sheet.Header className="bottom-sheet__header" />
//             <Sheet.Content className="bottom-sheet__content">
//               <div className="bottom-sheet__wrapper">
//                 {/* HEADER START */}
//                 <div className="container bottom-sheet__header">
//                   <div className="bottom-sheet__top-actions">
//                     <button className="ui-btn ui-btn_fill-grey bottom-sheet__top-action">
//                       <span>BACK</span>
//                     </button>
//                     <button className="ui-btn bottom-sheet__top-action">
//                       <span>CHECK OUT</span>
//                     </button>
//                   </div>
//                 </div>
//                 <div className="container">
//                   <button onClick={() => snapTo(0)}>Scroll Up 0</button>
//                   <button onClick={() => snapTo(1)}>Scroll Up 1</button>
//                   <button onClick={() => snapTo(2)}>Scroll Up 2</button>
//                   <button onClick={() => snapTo(3)}>Scroll Up 3</button>
//                 </div>
//                 <br />
//                 {/* HEADER END */}
//                 <p className="container bottom-sheet__text">
//                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis totam, minima eum, quis maiores sequi officiis non officia ipsam facilis, a nulla quisquam labore ad repellat minus iste distinctio illum. Doloribus repudiandae distinctio quas et aperiam quia vel similique consequuntur earum ea hic possimus tempore
//                   debitis dolor fugit numquam, voluptate fugiat nobis rerum! Illo id blanditiis odio, quas illum et dicta a reiciendis modi ut nostrum quaerat perferendis, vel, eius porro culpa quidem harum. Possimus quia at nam, adipisci nisi iusto, nulla fugiat laborum eum necessitatibus dolore odio ipsum nostrum tempore maiores neque? Sed culpa
//                   dicta fugit quasi vitae, asperiores mollitia delectus saepe veniam ad illo excepturi dignissimos, maxime perferendis ratione consequatur id. Placeat, aliquam mollitia? Perferendis vitae reprehenderit nobis laborum illo eaque non asperiores, deserunt repellat aut? Vero fugit excepturi cupiditate animi, blanditiis praesentium
//                   asperiores ab quia a et placeat pariatur quas tempora dignissimos alias, sed ut quibusdam vitae, quasi consectetur molestiae nobis autem. Rerum corrupti, consectetur quod fugit repellendus at delectus iure, impedit quaerat odit nobis repudiandae incidunt sequi ex iste optio? Placeat consequuntur cumque aut ducimus porro
//                   dignissimos. Cupiditate voluptatum quisquam facilis cum quia facere ducimus sequi in alias. Cumque pariatur id sequi sunt dolores. Alias ipsa reiciendis cumque inventore laborum, excepturi dolore tenetur, minima voluptatem at aspernatur omnis sequi cupiditate? Eius rem quidem ab ad provident harum explicabo reprehenderit saepe hic
//                   illo et dolores excepturi officiis neque nisi, distinctio unde. Explicabo tenetur asperiores incidunt neque laboriosam magni molestiae amet adipisci nisi perferendis placeat, magnam est possimus maxime quis, eveniet dolore velit quibusdam nulla atque dolorum unde! Facere, numquam ipsam quae beatae enim, sit eligendi a ad dolores
//                   repellendus doloremque non. Sunt cum officia fuga ea mollitia inventore nostrum dicta. Similique, soluta? Maxime, modi tenetur? Et eos doloribus labore nihil architecto id porro optio nam iure beatae eum unde saepe ipsa tempora cumque, amet fugit sunt doloremque fugiat dolore omnis, repellendus consequatur recusandae! Cumque vel
//                   quam, libero eum commodi consectetur a facere temporibus ullam quisquam natus molestias ex ab, impedit eius quidem recusandae! Deleniti necessitatibus, voluptas earum corporis repudiandae labore tempora, doloremque ratione ut explicabo minus quas vero nobis reprehenderit repellat commodi. Ipsam, architecto. Provident, porro
//                   deleniti? Cupiditate necessitatibus doloribus nulla, voluptatum minima molestias maxime eos excepturi, enim illo ratione, itaque iusto ab? Beatae explicabo dignissimos impedit dolor! Vitae, aliquam. Dicta repellendus recusandae aspernatur obcaecati deserunt, deleniti, et quas similique quasi aliquid facilis vitae consequatur dolor
//                   repudiandae laboriosam magnam totam commodi doloribus cumque unde ipsum incidunt sed molestiae at? Accusamus rerum illum necessitatibus incidunt, veritatis dicta commodi nostrum et! Unde optio quidem, possimus rerum quod doloribus accusantium laborum cumque, ut iste excepturi! Modi, quae! Mollitia sint consequuntur enim esse
//                   nostrum ex praesentium officia quisquam eligendi quae dolor ullam sed voluptatum sequi veniam earum, quibusdam labore maxime. Sed illo veritatis rerum accusantium expedita dolorem accusamus, eius corrupti debitis adipisci dolor maxime voluptas aut quam porro quisquam ad. Quod placeat fugiat nesciunt amet porro? Ducimus quaerat
//                   adipisci quis sapiente ipsa autem perferendis aperiam. Atque quis saepe quibusdam nisi? Facilis totam illum dolor quibusdam praesentium, animi alias necessitatibus harum itaque mollitia pariatur numquam quisquam autem non excepturi possimus reprehenderit nisi odit. Aperiam ad dolore, doloremque consequatur debitis optio blanditiis
//                   illo nisi incidunt soluta id ipsam laborum ullam amet totam odio repellat, magni accusamus adipisci perferendis. Doloribus minus aliquam quaerat harum sed ex ab quibusdam veniam, minima eveniet, id, hic quidem? Illum totam qui nobis, rerum harum consequuntur velit obcaecati assumenda iure atque, sint ullam aliquam laboriosam
//                   necessitatibus incidunt tempora iusto minima vel reiciendis ea veritatis quisquam. Dolor incidunt qui nam, quis consequatur quasi harum commodi tenetur sunt, magnam eius.
//                 </p>
//               </div>
//             </Sheet.Content>
//           </Sheet.Container>

//           <Sheet.Backdrop />
//         </Sheet>
//       </div>
//     </>
//   );
// }

// // 40

import {useRef, useState} from 'react';
import Sheet from 'react-modal-sheet';

const snapPoints = [-50, 0.5, 0];
const initialSnap = snapPoints.length - 1;
const disableOnClose = () => {};

const BottomSheet = () => {
  const [activeSheet, setActiveSheet] = useState(false);
  const ref = useRef();
  const snapTo = (i) => ref.current?.snapTo(i);

  return (
    <>
      <h1>Always open Sheet</h1>

      <Sheet initialSnap={1} ref={ref} isOpen={activeSheet} onClose={disableOnClose} snapPoints={snapPoints}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
              <button onClick={() => snapTo(0)}>20%</button>
              <button onClick={() => snapTo(1)}>40%</button>
              <button onClick={() => snapTo(2)}>80%</button>
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
    </>
  );
};

export default BottomSheet;
