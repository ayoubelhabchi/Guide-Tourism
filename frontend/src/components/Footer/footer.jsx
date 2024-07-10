import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram} from "react-icons/bs";

const Footer = () => {
    return (
        <FlowbiteFooter container>
            <div className="w-full">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div>
                        <FlowbiteFooter.Brand
                            Link=""
                            src="/img_ellipse_621.png"
                            alt="Flowbite Logo"
                            name="Flowbite"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <FlowbiteFooter.Title title="about" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Flowbite</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Tailwind CSS</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                        <div>
                            <FlowbiteFooter.Title title="Follow us" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Github</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Discord</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                        <div>
                            <FlowbiteFooter.Title title="Legal" />
                            <FlowbiteFooter.LinkGroup col>
                                <FlowbiteFooter.Link href="#">Privacy Policy</FlowbiteFooter.Link>
                                <FlowbiteFooter.Link href="#">Terms &amp; Conditions</FlowbiteFooter.Link>
                            </FlowbiteFooter.LinkGroup>
                        </div>
                    </div>
                    </div>
                    <FlowbiteFooter.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <FlowbiteFooter.Copyright href="#" by="Flowbite™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
                            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
                        
                        </div>
                    </div>
                </div>
            </FlowbiteFooter>
        );
    }

    export default Footer;