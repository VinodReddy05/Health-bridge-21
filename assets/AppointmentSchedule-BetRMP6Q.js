import{r,j as t}from"./index-C8N-Qaqw.js";import{s as h}from"./SupaBase-hXybzm9P.js";import{N as u}from"./NavBar-DrSRVsRg.js";/* empty css               */import"./createSvgIcon-UnPMeLsY.js";import"./react-toastify.esm-Cs-6VpAC.js";const E=()=>{const[i,d]=r.useState([]),[l,o]=r.useState(!0),[s,a]=r.useState(null),p=async()=>{try{o(!0),a(null);const e=localStorage.getItem("patientData");if(!e)throw new Error("Patient information is not found. Please log in.");const n=JSON.parse(e);if(!n.id)throw new Error("Invalid patient data. Missing patient ID.");const{data:m,error:c}=await h.from("Appointments").select(`
          id,
          patient_id,
          patient_name,
          doctor_id,
          date_time,
          doctor_name,
          doctor_specialization,
          doctor_image,
          doctor_designation
        `).eq("patient_id",n.id).order("date_time",{ascending:!0});if(c)throw c;d(m)}catch(e){a(e.message)}finally{o(!1)}};return r.useEffect(()=>{p()},[]),s?t.jsxs("p",{children:["Error: ",s]}):t.jsxs("div",{className:"appointment-schedule",children:[t.jsx(u,{onSearch:e=>setSearchQuery(e)}),l?t.jsx("p",{children:"Loading appointments..."}):t.jsx("ul",{children:i.length>0?i.map(e=>t.jsxs("li",{children:[t.jsx("img",{src:e.doctor_image,alt:""}),t.jsxs("p",{children:[t.jsx("strong",{children:"Doctor Name:"})," ",e.doctor_name]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Specialization:"})," ",e.doctor_specialization]}),t.jsxs("p",{children:[t.jsx("strong",{children:"Date & Time:"})," ",e.date_time]})]},e.id)):t.jsx("p",{children:"No appointments found."})})]})};export{E as default};
