import { useEffect } from 'react'
import Vendor from 'views/vendor/profile'
function Index(props){
  const dummyVendorAndMe = true
  useEffect(() => {

  },[])
  if (dummyVendorAndMe) {
    return <Vendor />
  }
}

export default Index
