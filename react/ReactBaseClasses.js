const emptyObject = {};

/**
 * 컴포넌트 상태 업데이트를 위한 기본 클래스 도우미 (Base class helpers)
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;

  this.refs = emptyObject;
}
