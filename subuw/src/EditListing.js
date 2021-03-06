
import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink
} from 'reactstrap';
import { AddListing } from './AddListing';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import $ from 'jquery';

export class EditListing extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = ({
            modal: false
        })
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div id="editListingCard">
                <div className="card card-inverse" onClick={this.toggle}>
                    <img className="card-img" src={this.props.listing.imgs} alt="Listing Cover" />
                    <div className="card-img-overlay" id='listing-card'>
                        <h4 className="card-title-listing">{"$" + this.props.listing.rent + '/mo'}</h4>
                        <p className="card-text">{this.props.listing.bedrooms + "bd . " + this.props.listing.bathrooms + "ba . " + this.props.listing.sqrft + "sqft"} <br />
                            {this.props.listing.address + ', ' + this.props.listing.city + ', ' + this.props.listing.state}
                        </p>
                        <span class="tooltiptext">Click to edit listing</span>
                    </div>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} autoFocus={false} >
                    <ModalBody>
                        <h2>Edit Listing</h2>
                        <AddListing listing={this.props.listing} uid={this.props.uid} />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
