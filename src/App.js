import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import detections from './assets/detections.json';
import Toolbar from './components/toolbar';
import Drawer from './components/drawer';

export default class SimpleExample extends Component {
    state = {
        lat: 40.4,
        lng: 22.8,
        zoom: 11,
        drawer_open: false,
    }

    handleMenuClick = () => {
        this.setState({
            drawer_open: true,
        })
    }

    handleClickAway = () => {
        this.setState({
            drawer_open: false,
        })
    }

    getGeoJson() {
        return (
            <GeoJSON data={detections} style={(...args) => {
                console.log(...args)
                return {}
            }} />
        )
    }

    getGeoMarkers() {
        const markers = detections.features.map((datum,index) => {            
            const position = [
                datum.properties.Latitude,
                datum.properties.Longitude
            ]
            return (
            <Marker key={index} position={position} onClick={() => console.log('poitses')}>
                    <Popup>
                        The latitude is {datum.properties.Latitude}
                    </Popup>
                </Marker>
            )
        })
        return markers;
    }

    render() {
        const position = [this.state.lat, this.state.lng]
        return (
            <div id="root">
                <Toolbar
                    menuOnClick={this.handleMenuClick}
                />
                <Drawer
                    open={this.state.drawer_open}
                    onClickAway={this.handleClickAway}
                />
                <Map style={{ height: 900 }} center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.getGeoMarkers()}
                </Map>
            </div>
        )
    }
}
