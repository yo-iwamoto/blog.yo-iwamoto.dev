import "@testing-library/jest-dom";

vi.mock('next/link', () => ({
  default: ({...props}) => <a {...props} />,
}))
