import Link from "next/link";
interface BlogProps {
    params?: Record<string, unknown>; // Replace 'Record<string, unknown>' with a more specific type if known
}

export default async function AuthorDetails(props: BlogProps) {
    const params = await props?.params;
    console.log(params);
    const blogDetailsData =[ 
        {
            id: "Understanding-Business-Models-The-secret-behind-every-successful-company",
            title: "VenturEdu blogs +GST",
            image: "",
            author: "By VenturEdu",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over "
        }
    ];
    
    const blogDetails = blogDetailsData.filter(details => `/blog/${details.id}` === `${params}`);
    const singleBlogDetails = blogDetails[0];
  
    return (<>
        <section className=" mb-5 container mx-auto w-full p-4 md:p-0">
            <div>
                <div className="col-span-3 my-6">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">{singleBlogDetails?.author}</h1>
                </div>
            </div>
        </section>
    </>);
}


