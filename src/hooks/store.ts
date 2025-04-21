import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from "react-redux";
import type { AppDispatch, RootState } from "../store";

/*Permite añadir una capa de abstraccion
Entre mi componente y react-redux con el fin de entregarle el tipo de dato expecifico para 
evitando dependencias constantes de una libreria */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;

