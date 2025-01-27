import React from 'react'
import '../Pages/Faq.css'

export default function FAQ() {
    return (
        <div style={{ backgroundColor: "#0f0a13", padding: "4rem 0" }}>
            <div className='container'>
                <div className='text-light text-center'>
                    <h2 className="fw-bold mb-3">Faqs</h2>
                    <h3 className="mb-5" style={{ fontWeight: "600" }}>
                        Frequently Asked Questions
                    </h3>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item" style={{ backgroundColor: "#0f0a13", border: "none" }}>
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: "#0f0a13", color: "white", border: "none" }}>
                            Frequently Asked Questions
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ color: "white" }}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={{ backgroundColor: "#0f0a13", border: "none" }}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: "#0f0a13", color: "white", border: "none" }}>
                            Frequently Asked Questions 
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ color: "white" }}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={{ backgroundColor: "#0f0a13", border: "none" }}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: "#0f0a13", color: "white", border: "none" }}>
                            Frequently Asked Questions 
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ color: "white" }}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{color:"white"}}></hr>
        </div>
    )
}

