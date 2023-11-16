// Custom components
import CustomButton from './CustomButton'


const Markmið = ({markmid, handleCompletedMarkmid}) => {
  return (
    <>
    <h1 className='text-3xl sm:text-6xl font-bold 
        text-center'> {markmid}</h1>
    <CustomButton 
      text="Markmið klárað"
      handleCompletedMarkmid={handleCompletedMarkmid}
    />
    </>
  )
}

export default Markmið