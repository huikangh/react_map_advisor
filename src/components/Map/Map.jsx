import React from "react"
import GoogleMapReact from "google-map-react"
import { Paper, Typograph, useMediaQuery } from "@material-ui/core"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import Rating from "@material-ui/lab"
import useStyles from "./styles"

export default function Map() {

    const classes = useStyles()
    const isMobile = useMediaQuery('(min-width:600px)')
    const coordinates = {lat: 0, lng: 0}

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key:'AIzaSyAoUwp7x4vX0mR7t-qTAq2-eueMrHQlD9s' }}
            defaultCenter={coordinates}
            center={coordinates}
            defaultZoom={14}
            margin={[50, 50, 50, 50]}
            options={''}
            onChange={''}
            onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    )
}