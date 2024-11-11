enum Technology {
  JAVA = "java",
  GROOVY = "groovy",
  KOTLIN = "kotlin",
  BASH = "bash",
  PHP = "php",
  SQL = "sql",
  JAVA_SCRIPT = "java script",
  TYPE_SCRIPT = "type script",
  HAZELCAST = "hazelcastt",
  SPRING = "spring",
  SPRING_CLOUD = "spring cloud",
  SPRING_BOOT = "spring data",
  SPRING_SECURITY = "spring security",
  ACTUATOR = "actuator",
  SPRING_TEST = "spring test",
  RIBBON = "ribbon",
  EUREKA = "eureka",
  OPEN_FEIGN = "open feign",
  HIBERNATE = "hibernate",
  JPA = "jpa",
  JERSEY = "jersey",
  O_AUTH2 = "oAuth2",
  REST = "rest",
  GRAPH_QL = "graph ql",
  SOAP = "soap",
  MONGO_DB = "mongo db",
  MY_SQL = "my sql",
  MS_SQL = "ms sql",
  ORACLE = "oracle",
  ELASTIC_SEARCH = "elastic search",
  REDIS = "redis",
  MEMCACHE = "memcache",
  HADOOP = "hadoop",
  POSTGRES = "POSTGRES",
  ANGULAR = "angular",
  REACT = "react",
  JQUERY = "jquery",
  HTML = "html",
  XML = "xml",
  YAML = "yaml",
  CSS = "css",
  JSON = "json",
  K8S = "k8s",
  OKD = "okd",
  ARGO = "argo",
  KAFKA = "kafka",
  RABBIT_MQ = "rabbit mq",
  KIBANA = "kibana",
  GRAFANA = "grafana",
  PROMETHEUS = "prometheus",
  SLEUTH = "sleuth",
  MICRO_METER = "micro meter",
  LOMBOK = "lombok",
  HUE = "hue",
  HIVE = "hive",
  SPOCK = "spock",
  PITEST = "pitest",
  WIRE_MOCK = "wire_mock",
  RESTITO = "restito",
  JUNIT = "junit5",
  ARCHUNIT = "archunit",
  REST_ASSURED = "rest_assured",
  SONAR = "sonar",
  CYPRESS = "cypress",
  WORDPRESS = "wordpress",
  GIT = "git",
  GITLAB = "gitlab",
  GITHUB = "github",
  SVN = "svn",
  SPRING_DATA = "spring data",
  HDFS = "hdfs",
  PAGER_DUTY = "pagerduty",
  AVRO = "avro",
  HELM = "helm",
  OPEN_SHIFT = "open shift",
  GRAY_LOG = "graylog",
  AWS = "AWS",
  JENKINS = "jenkins",
  BAMBOO = "bamboo",
  MESOS = "mesos",
  FREEMARKER = "freemarker",
  THYMELEAF = "thymeleaf",
  MAVEN = "maven",
  GRADLE = "gradle",
  NPM = "npm",
  BITBUCKET = "bitbucket",
  SPLUNK = "Splunk",
  CLOUDFLARE = "cloudflare"

}

enum ApplicationArchitecture {
  HEXAGONAL_ARCHITECTURE = "HEXAGONAL ARCHITECTURE",
  ONION_ARCHITECTURE = "ONION ARCHITECTURE",
  MVC = "MVC",
  LAYERED_ARCHITECTURE = "LAYERED ARCHITECTURE",
  PIPE_AND_FILTERS = "PIPE AND FILTERS",
  MICRO_CARNAL = "MICRO CARNAL",
  CQRS = "CQRS",
  OTHER = "OTHER"
}

enum SystemArchitecture {
  MONOLITH = "monolith",
  MICROSERVICES = "microservices",
  MICRO_MONOLITH = "micro monolith",

}

enum Methodology {
  AGILE = "agile",
  LEAN = "lean",
  SCRUM = "scrum",
  KANBAN = "kanban",
  WATERFALL = "waterfall",
  SAFE = "safe",
  XP = "xp"
}

export {
  Methodology,
  ApplicationArchitecture,
  SystemArchitecture,
  Technology
}
