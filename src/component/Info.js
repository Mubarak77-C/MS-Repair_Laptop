import React from 'react'



export const Info = () => {
    return (
        <div>
            <div class="overlayer">
                <div class="container">
                    <div class="pb-70 pt-50">
                        <div class="row d-flex">
                            <div class="col-md-4 col-sm-12 col-md-offset-2">
                              
                           
                           
                            </div>
                            <div class="col-md-4 col-sm-12">
                                <p class="title h1">Join our newsletter</p>
                                <form class="form-inline" action="/newsletter" accept-charset="UTF-8" data-remote="true" method="post" />
                                <input name="utf8" type="hidden" value="✓" />
                                <input type="email" name="subscribe_email" id="subscribe_email" class="form-control" placeholder="Enter Email" required="required" />
                                <button id="submitNewsletter" type="button" name="button" class="btn btn-info btn-round btn-fill" >
                                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i> Join
                             </button>

                            </div>
                        </div>
                    </div>
                </div>
            
                
                <div class="container">
                    <div class="row support">
                        <div class="col-sm-2 col-xs-6">
                            <h4 class="text-black">Company</h4>
                            <ul class="list-unstyled" data-turbolinks="false">
                                <li><a href="/src/component/About.js">About Us</a></li>
                                <li><a href="/templates/free">Freebies</a></li>
                                <li><a href="/templates/premium">Premium</a></li>
                                <li> <a href="https://www.creative-tim.com/blog">Blog</a></li>
                                <li> <a href="/affiliates/new">Affiliate Program</a></li>
                                <li> <a href="/coupon">Get coupon</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-2 col-xs-6">
                            <h4 class="text-black">Help and Support</h4>
                            <ul class="list-unstyled" data-turbolinks="false">
                                <li><a href="https://www.creative-tim.com/knowledge-center">Knowledge Center</a></li>
                                <li><a href="/contact-us">Contact Us</a></li> <li><a href="/support-terms">Premium Support</a></li>
                                <li><a href="/sponsorships">Sponsorships</a></li>
                                <li><a target="blank" href="https://services.creative-tim.com/?ref=ct-footer">Custom Development</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Info
