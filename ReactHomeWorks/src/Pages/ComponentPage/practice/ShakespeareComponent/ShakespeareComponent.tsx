import AuthorInfo from "./AuthorInfo"
import WorksList from "./WorkList"

const ShakespeareComponent = () => {
    return (
        <div>
      <h1>Бібліографія Шекспіра</h1>

      <AuthorInfo />

      <WorksList />

      <p>
        Вільям Шекспір залишив величезну
        літературну спадщину.
      </p>
    </div>
    )
}
export default ShakespeareComponent;