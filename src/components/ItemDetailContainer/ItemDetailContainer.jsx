import {Input} from "../../../../clase10-evt/Input"
import Intercambiabilidad from "../../../../clase10-evt/Intercambiabilidad"
import Caso1 from "../../../../clase10-evt/Caso1"
import {ViewPort} from "../../../../clase10-evt/ViewPort"
import { ItemDetail } from "./ItemDetail/ItemDetail"

export const ItemDetailContainer = () => {
    const [ product, setproduct] = useState({})
    const {pid} = useParams()

    useEffect(()=>{
        mFetch(pid)
            .then(res => setproduct(res))
            .catch(err => console.log('Error; ', err))
    }, [])

    return(
        <ItemDetail {...product} />
    )
}