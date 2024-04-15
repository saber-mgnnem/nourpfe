import React,{ useState,useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom';

function Dashboard() {
  const [viewUserCount , setviewUserCount] = useState("")
  const [viewUserNonValideCount , setviewUserNonValideCount] = useState("")
  const [viewform, setViewform] = useState("");

  useEffect(()=>{

    axios.get(`/api/user`).then(response => {
        // Handle the response data
        if(response.data.status === 200){
          setviewUserCount(response.data.user_count)
          setviewUserNonValideCount(response.data.userNonValideCount)
          
        }
    })

    axios.get(`/api/AdmingetForms`).then(response => {
      if (response.data.status === 200) {
        setViewform(response.data.formCount);
      }
    });
 
  },[]);
  return (
    <>
   <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard v1</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>{viewform}</h3>
              <p>Liste de Forms</p>
            </div>
            <div className="icon">
              <i className="ion ion-bag" />
            </div>
            <Link to="/admin/form_list" className="small-box-footer">Plus d'informations<i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>{viewUserNonValideCount}</h3>
              <p>Les compts Non valide</p>
            </div>
            <div className="icon">
              <i className="ion ion-stats-bars" />
            </div>
            <Link to="/admin/user_list" className="small-box-footer">Plus d'informations<i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-warning">
            <div className="inner">
              <h3>{viewUserCount}</h3>
              <p>Inscriptions des utilisateurs</p>
            </div>
            <div className="icon">
              <i className="ion ion-person-add" />
            </div>
            <Link to="/admin/user_list" className="small-box-footer">Plus d'informations<i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
        <div className="col-lg-3 col-6">
          <div className="small-box bg-danger">
            <div className="inner">
              <h3>{viewUserNonValideCount}</h3>
              <p>Les compts Non valide</p>
            </div>
            <div className="icon">
              <i className="ion ion-pie-graph" />
            </div>
            <Link to="/admin/user_list" className="small-box-footer">Plus d'informations<i className="fas fa-arrow-circle-right" /></Link>
          </div>
        </div>
      </div>
    </div>
  </section>
      

    </>

 )
}

export default Dashboard