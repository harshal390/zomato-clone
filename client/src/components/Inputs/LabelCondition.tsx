import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LabelCondition() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm">I agree to Zomato's <span className="color-red">Terms of Service</span>, <span className="color-red">Privacy Policy</span> and <span className="color-red">Content Policies</span></Label>
      </div>
    </div>
  )
}
