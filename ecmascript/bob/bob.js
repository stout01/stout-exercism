class Bob {
  hey(message) {
    const statement = message.trim();

    if (!statement) {
      return 'Fine. Be that way!';
    }

    if (statement === statement.toUpperCase() && statement !== statement.toLowerCase()) {
      return 'Whoa, chill out!';
    }

    if (statement.endsWith('?')) {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}

export default Bob;
