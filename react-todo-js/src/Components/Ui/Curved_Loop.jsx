import CurvedLoop from '../common/CurvedLoop';

const Curved_Loop = () => {
  return (

    <>


    <CurvedLoop 
    marqueeText="Be ✦ Creative ✦ With ✦ React ✦ Next ✦"
    speed={0.3}
    curveAmount={0}
    direction="right"
    interactive={true}
    className="custom-text-style"
    />

    {/* // Non-interactive with slower speed
    <CurvedLoop 
    marqueeText="Smooth Curved Animation"
    speed={1}
    curveAmount={300}
    interactive={false}
    /> */}
    </>
// Basic usage

  )
}

export default Curved_Loop