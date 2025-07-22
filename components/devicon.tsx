"use client";

import {
  JavascriptOriginal,
  TypescriptOriginal,
  PythonOriginal,
  JavaOriginal,
  ReactOriginal,
  NextjsOriginal,
  VuejsOriginal,
  NodejsOriginal,
  FlutterOriginal,
  JestPlain,
  DockerOriginal,
  GithubOriginal,
  AmazonwebservicesPlainWordmark,
  MongodbOriginal,
  FirebaseOriginal,
  CypressioOriginal,
  PlaywrightOriginal,
  CsharpOriginal,
  PhpOriginal,
  DartOriginal,
  BashOriginal,
  AngularOriginal,
  MaterialuiOriginal,
  BootstrapOriginal,
  TailwindcssOriginal,
  JqueryOriginal,
  SocketioOriginal,
  XamarinOriginal,
  AndroidOriginal,
  ExpressOriginal,
  LaravelOriginal,
  FlaskOriginal,
  MysqlOriginal,
  SqliteOriginal,
  VscodeOriginal,
  JiraOriginal,
  GitOriginal,
  Windows11Original,
  LinuxOriginal,
  AppleOriginal,
  Html5Original,
  GooglecloudOriginal,
  SwaggerOriginal,
  DiscordjsOriginal,
  Css3Original,
  MaterializecssOriginal,
  JenkinsOriginal,
  ReduxOriginal,
  YiiOriginal,
} from "devicons-react";

const iconMap = {
  javascript: JavascriptOriginal,
  typescript: TypescriptOriginal,
  python: PythonOriginal,
  java: JavaOriginal,
  react: ReactOriginal,
  nextjs: NextjsOriginal,
  vuejs: VuejsOriginal,
  nodejs: NodejsOriginal,
  flutter: FlutterOriginal,
  expo: ReactOriginal,
  jest: JestPlain,
  cypress: CypressioOriginal,
  playwright: PlaywrightOriginal,
  docker: DockerOriginal,
  github: GithubOriginal,
  amazonwebservices: AmazonwebservicesPlainWordmark,
  mongodb: MongodbOriginal,
  firebase: FirebaseOriginal,
  pandas: PythonOriginal,
  matplotlib: PythonOriginal,
  csharp: CsharpOriginal,
  php: PhpOriginal,
  dart: DartOriginal,
  bash: BashOriginal,
  angular: AngularOriginal,
  mui: MaterialuiOriginal,
  bootstrap: BootstrapOriginal,
  tailwindcss: TailwindcssOriginal,
  jquery: JqueryOriginal,
  socketio: SocketioOriginal,
  xamarin: XamarinOriginal,
  android: AndroidOriginal,
  express: ExpressOriginal,
  laravel: LaravelOriginal,
  flask: FlaskOriginal,
  mysql: MysqlOriginal,
  sqlite: SqliteOriginal,
  vscode: VscodeOriginal,
  jira: JiraOriginal,
  git: GitOriginal,
  windows: Windows11Original,
  linux: LinuxOriginal,
  apple: AppleOriginal,
  html5: Html5Original,
  googlecloud: GooglecloudOriginal,
  swagger: SwaggerOriginal,
  discord: DiscordjsOriginal,
  materializecss: MaterializecssOriginal,
  jenkins: JenkinsOriginal,
  redux: ReduxOriginal,
  yii: YiiOriginal,
  css3: Css3Original,
  stripe: null,
  scrum: null,
  overwolf: null,
  magic: null,
  web3: null,
  nx: null,
  adobetarget: null,
  azuracast: null,
  zeppos: null,
};

export type DeviconName = keyof typeof iconMap;

const blackIcons: DeviconName[] = ["express", "flask", "socketio", "bash", "github", "apple"];

interface DeviconProps {
  name: DeviconName;
  size?: number;
  className?: string;
  whiteBackgroundWhenBlack?: boolean;
}

export function Devicon({ name, size = 24, className = "", whiteBackgroundWhenBlack = false }: DeviconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Fallback to a simple colored circle with first letter
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E9"];
    const colorIndex = name.charCodeAt(0) % colors.length;
    const bgColor = colors[colorIndex];

    return (
      <div
        className={`flex items-center justify-center rounded font-bold text-white ${className}`}
        style={{
          width: size,
          height: size,
          fontSize: size * 0.4,
          backgroundColor: bgColor,
        }}
      >
        {name.charAt(0).toUpperCase()}
      </div>
    );
  }

  if (whiteBackgroundWhenBlack && blackIcons.includes(name)) {
    return (
      <div className="rounded-full p-2 bg-white">
        <IconComponent size={size} className={className} />
      </div>
    );
  }

  return <IconComponent size={size} className={className} />;
}
