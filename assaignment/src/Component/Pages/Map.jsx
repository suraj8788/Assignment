import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function GoogleMap() {
    return (
        <div style={{ backgroundColor: "#0f0a13"}}>
            <div className="container">
                <h2 className="text-center mb-4 text-white">Our Location</h2>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div
                            className="ratio ratio-16x9" // Bootstrap's aspect ratio helper
                            style={{
                                border: "2px solid #ddd",
                                borderRadius: "15px",
                                overflow: "hidden",
                            }}
                        >
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094474!2d144.9537353153169!3d-37.81627997975143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776f3d7ee2ed2b!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1616292424386!5m2!1sen!2sau"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
