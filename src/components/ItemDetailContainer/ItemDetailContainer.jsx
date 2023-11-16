import {Input} from "../../../clase10/Input"
import Intercambiabilidad from "../../../clase10/Intercambiabilidad"
import Caso1 from "../../../clase10/Caso1"
import {ViewPort} from "../../../clase10/ViewPort"
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