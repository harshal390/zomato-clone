import optionsNearMe from "@/api/optionsNearme";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const ExploreOptionNearMe = () => {
    return (
        <div className="max-w component-class">
            <h1 className="heading">Explore options near me</h1>
            <Accordion type="single" collapsible className="flex flex-col gap-5">
                {
                    optionsNearMe.map((option) => {
                        return <AccordionItem value={option.id.toString()} key={option.id} className="border px-5 rounded-xl">
                            <AccordionTrigger className="text-xl text-gray-800">{option.title}</AccordionTrigger>
                            <AccordionContent className="grid grid-cols-4 gap-5 text-gray-600">
                                {option.list.map((list, i) => {
                                    return <div key={i} className="cursor-pointer hover:text-gray-800">{list}</div>
                                })}
                            </AccordionContent>
                        </AccordionItem>
                    })
                }

            </Accordion>
        </div>
    )
}

export default ExploreOptionNearMe;
