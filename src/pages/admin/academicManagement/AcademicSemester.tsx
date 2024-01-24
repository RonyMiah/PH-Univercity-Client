import { useGetAllSemestersQuery } from "../../../redux/features/academicSemester/academicApi"


const AcademicSemester = () => {

    const {data} = useGetAllSemestersQuery(undefined)

    console.log(data)

  return (
    <div>
      <h2>Academic Semester management</h2>
    </div>
  )
}

export default AcademicSemester
