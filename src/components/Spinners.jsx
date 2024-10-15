import HashLoader from 'react-spinners/HashLoader'

const override = {
    display: 'block',
    margin: '100px auto'
}
const Spinners = ({ loading }) => {
  return (
    <HashLoader 
        color='#4273ea'
        loading={ loading }
        cssOverride={override}
        size={150}
    />
  )
}

export default Spinners