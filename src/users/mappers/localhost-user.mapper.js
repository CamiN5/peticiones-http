

export const localHostUserToModel = (localHostUser) => {

    const {
    id,
    isActive,
    balance,
    avatar,
    first_name,
    last_name,
    gender,

    } = localHostUser;

    return new User ({
    id,
    isActive,
    balance,
    avatar,
    firstName: first_name,
    lastName: last_name,
    gender,
    })
}