var context = $evaluation.getContext().getIdentity().getAttributes();
var identity = context.getIdentity();
var attributes = identity.getAttributes();

if (attributes.containsValue(' FANCY_RES_ACCESS_ATTRIBUTE', 'PRETTY_FANCY')) {
    $evaluation.grant();
} else {
    $evaluation.deny();
}
