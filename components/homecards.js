import Image from "next/image";
import Link from "next/link";
import dummyImage from '../public/img/dummy.png';

export default function homecards() {
  return (
    <section id="blog">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="intro">
                  
                    <h2>Fresh recommendations</h2>
                   
                </div>
            </div>
        </div>
        <div class="row">

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div class="col-md-3 col-6">
                <article class="blog-post">
                <Link href="/"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div class="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p class="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>
         
        </div>
    </div>
</section>
  )
}
