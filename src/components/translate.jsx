import axios from "axios";
import { useEffect, useState } from "react";
function Translator() {
      const [search, setSearch] = useState({ req: '', res: '' });
      const [ss, setSs] = useState('');
      function Submit() {
            setSearch({ ...search, req: ss });
      }
      useEffect(() => {
            if (search.req) {
                  const data = new FormData();
                  data.append("q", search.req);
                  data.append("target", "uz");
                  data.append("source", "en");
                  axios.post(`https://google-translate1.p.rapidapi.com/language/translate/v2`, data, {
                        headers: {
                              'content-type': 'application/x-www-form-urlencoded',
                              // 'Accept-Encoding': 'application/json',
                              'X-RapidAPI-Key': '05258f4f86msh680ee1b704ed867p11184cjsn925fed9465ba',
                              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
                        },
                  }).then(res => {
                        console.log(res.data);
                        setSearch({ ...search, res: res.data });
                  })
            }
      }, [search.req]);
      return (
            <>
                  <input type="text" onChange={e => setSs(e.target.value)} />
                  <button onClick={Submit}>OK</button>
                  <p>{search.res}</p>
            </>
      );
}

export default Translator;