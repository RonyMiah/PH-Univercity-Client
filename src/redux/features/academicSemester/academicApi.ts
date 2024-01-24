import { baseApi } from '../../api/baseApi';

const academicSemesterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //!Only Get => query other wise mutation
    getAllSemesters: builder.query({
      query: () => ({
        url: '/academic-semesters',
        method: 'GET',
      }),
    }),
  }),
});


export const {useGetAllSemestersQuery} = academicSemesterApi;