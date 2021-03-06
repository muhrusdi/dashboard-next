import React, { Fragment } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import { css } from 'emotion'
import { Row } from 'antd'
import { connect } from 'react-redux'
import { actionToggleLoad } from '../actions'
import Globalnav from './Globalnav'

const Layout = ({ children, title = 'Bisnis Eproc', actionToggle, toggle, toggleSide}) => {
	Router.onRouteChangeStart = (url) => {
		actionToggle(true)
		NProgress.start()
	}
	
	Router.onRouteChangeComplete = () => {
		actionToggle(false)
		console.log('complete', toggle)
		NProgress.done()
	}

	Router.onRouteChangeError = () => {
		actionToggle(false)
		NProgress.done()
	}

	const left = !toggleSide ? '200px' : '80px'

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/antd/3.5.2/antd.min.css' />
				<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,700" rel="stylesheet"/>
				<link rel="stylesheet" href="./static/stylesheets/nprogress.css"/>
			</Head>
			<Globalnav/>
			{
				children
			}
		</>
	)
}

const mapStateToProps = (state, ownProps) => {
	return {
		toggle: state.toggles.togglePageLoad,
		toggleSide: state.toggles.toggleSide
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		actionToggle: toggle => dispatch(actionToggleLoad(toggle))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)