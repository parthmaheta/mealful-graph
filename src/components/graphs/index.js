import { fetchData } from "../../api/fetchData"
import { LOCAL_URL } from "../../api"
import { useSelector, useDispatch } from "react-redux"
import { ShowLoading } from "../ShowLoading"
import { ShowError } from "../ShowError"
import { useEffect } from "react"
import { DisplayGraphs } from "./DisplayGraphs"

export function Graphs() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data)

  const Fetchdata = () => {
    fetchData(LOCAL_URL, dispatch)
  }

  useEffect(() => {
    Fetchdata()
  }, [])

  return data.fetching ? (
    <ShowLoading />
  ) : data.error ? (
    <ShowError reload={Fetchdata} />
  ) : (
    <DisplayGraphs data={data.data} />
  )
}
