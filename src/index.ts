import { add } from "./operations/add";
import { apply } from "./operations/apply";

@add()
class ExampleClass {
  @apply()
  method() {}
}
