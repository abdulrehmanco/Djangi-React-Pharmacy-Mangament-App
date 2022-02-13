import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block"> <Link to="#" target="_blank">Pharmacy Managment System</Link> from Al MARHABA RAIS.</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">Copyright © 2021. All rights reserved by AL Marhaba Rais.</span>
          </div>
        </footer>
    )
}

export default Footer
