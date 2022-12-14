PGDMP     &    !                z            newmain    14.2    14.2 )               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16396    newmain    DATABASE     c   CREATE DATABASE newmain WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_India.1252';
    DROP DATABASE newmain;
                postgres    false            ?            1259    16397    qcss    TABLE     ?   CREATE TABLE public.qcss (
    q character varying,
    a character varying,
    b character varying,
    c character varying,
    d character varying,
    ans character varying,
    id integer NOT NULL
);
    DROP TABLE public.qcss;
       public         heap    postgres    false            ?            1259    16402    qcss_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.qcss_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.qcss_id_seq;
       public          postgres    false    209                        0    0    qcss_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.qcss_id_seq OWNED BY public.qcss.id;
          public          postgres    false    210            ?            1259    16403    qhtml    TABLE     ?   CREATE TABLE public.qhtml (
    q character varying,
    a character varying,
    b character varying,
    c character varying,
    d character varying,
    ans character varying,
    id integer NOT NULL
);
    DROP TABLE public.qhtml;
       public         heap    postgres    false            ?            1259    16408    qhtml_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.qhtml_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.qhtml_id_seq;
       public          postgres    false    211            !           0    0    qhtml_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.qhtml_id_seq OWNED BY public.qhtml.id;
          public          postgres    false    212            ?            1259    16409    qjavascript    TABLE     ?   CREATE TABLE public.qjavascript (
    q character varying,
    a character varying,
    b character varying,
    c character varying,
    d character varying,
    ans character varying,
    id integer NOT NULL
);
    DROP TABLE public.qjavascript;
       public         heap    postgres    false            ?            1259    16414    qjavascript_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.qjavascript_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.qjavascript_id_seq;
       public          postgres    false    213            "           0    0    qjavascript_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.qjavascript_id_seq OWNED BY public.qjavascript.id;
          public          postgres    false    214            ?            1259    16415    result    TABLE     ?  CREATE TABLE public.result (
    id integer NOT NULL,
    name character varying,
    email character varying,
    scohtml integer,
    corhtml integer,
    incohtml integer,
    html_date date DEFAULT CURRENT_DATE NOT NULL,
    html_time time without time zone DEFAULT CURRENT_TIME NOT NULL,
    scocss integer,
    corcss integer,
    incocss integer,
    css_date date DEFAULT CURRENT_DATE NOT NULL,
    css_time time without time zone DEFAULT CURRENT_TIME NOT NULL,
    scojs integer,
    corjs integer,
    incojs integer,
    js_date date DEFAULT CURRENT_DATE NOT NULL,
    js_time time without time zone DEFAULT CURRENT_TIME NOT NULL,
    s_id integer
);
    DROP TABLE public.result;
       public         heap    postgres    false            ?            1259    16426    result_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.result_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.result_id_seq;
       public          postgres    false    215            #           0    0    result_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.result_id_seq OWNED BY public.result.id;
          public          postgres    false    216            ?            1259    16427    rules    TABLE     T   CREATE TABLE public.rules (
    terms character varying,
    id integer NOT NULL
);
    DROP TABLE public.rules;
       public         heap    postgres    false            ?            1259    16432    rules_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.rules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.rules_id_seq;
       public          postgres    false    217            $           0    0    rules_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.rules_id_seq OWNED BY public.rules.id;
          public          postgres    false    218            ?            1259    16433    users    TABLE     ?   CREATE TABLE public.users (
    name text,
    email text,
    username text,
    password text,
    qualification text,
    s_id integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16438    users_s_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.users_s_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.users_s_id_seq;
       public          postgres    false    219            %           0    0    users_s_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.users_s_id_seq OWNED BY public.users.s_id;
          public          postgres    false    220            u           2604    16439    qcss id    DEFAULT     b   ALTER TABLE ONLY public.qcss ALTER COLUMN id SET DEFAULT nextval('public.qcss_id_seq'::regclass);
 6   ALTER TABLE public.qcss ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209            v           2604    16440    qhtml id    DEFAULT     d   ALTER TABLE ONLY public.qhtml ALTER COLUMN id SET DEFAULT nextval('public.qhtml_id_seq'::regclass);
 7   ALTER TABLE public.qhtml ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211            w           2604    16441    qjavascript id    DEFAULT     p   ALTER TABLE ONLY public.qjavascript ALTER COLUMN id SET DEFAULT nextval('public.qjavascript_id_seq'::regclass);
 =   ALTER TABLE public.qjavascript ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213            ~           2604    16442 	   result id    DEFAULT     f   ALTER TABLE ONLY public.result ALTER COLUMN id SET DEFAULT nextval('public.result_id_seq'::regclass);
 8   ALTER TABLE public.result ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215                       2604    16443    rules id    DEFAULT     d   ALTER TABLE ONLY public.rules ALTER COLUMN id SET DEFAULT nextval('public.rules_id_seq'::regclass);
 7   ALTER TABLE public.rules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217            ?           2604    16444 
   users s_id    DEFAULT     h   ALTER TABLE ONLY public.users ALTER COLUMN s_id SET DEFAULT nextval('public.users_s_id_seq'::regclass);
 9   ALTER TABLE public.users ALTER COLUMN s_id DROP DEFAULT;
       public          postgres    false    220    219                      0    16397    qcss 
   TABLE DATA           6   COPY public.qcss (q, a, b, c, d, ans, id) FROM stdin;
    public          postgres    false    209   q+                 0    16403    qhtml 
   TABLE DATA           7   COPY public.qhtml (q, a, b, c, d, ans, id) FROM stdin;
    public          postgres    false    211   ?-                 0    16409    qjavascript 
   TABLE DATA           =   COPY public.qjavascript (q, a, b, c, d, ans, id) FROM stdin;
    public          postgres    false    213   !0                 0    16415    result 
   TABLE DATA           ?   COPY public.result (id, name, email, scohtml, corhtml, incohtml, html_date, html_time, scocss, corcss, incocss, css_date, css_time, scojs, corjs, incojs, js_date, js_time, s_id) FROM stdin;
    public          postgres    false    215   ?0                 0    16427    rules 
   TABLE DATA           *   COPY public.rules (terms, id) FROM stdin;
    public          postgres    false    217   ?2                 0    16433    users 
   TABLE DATA           U   COPY public.users (name, email, username, password, qualification, s_id) FROM stdin;
    public          postgres    false    219   ?4       &           0    0    qcss_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.qcss_id_seq', 26, true);
          public          postgres    false    210            '           0    0    qhtml_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.qhtml_id_seq', 31, true);
          public          postgres    false    212            (           0    0    qjavascript_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.qjavascript_id_seq', 6, true);
          public          postgres    false    214            )           0    0    result_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.result_id_seq', 18, true);
          public          postgres    false    216            *           0    0    rules_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.rules_id_seq', 26, true);
          public          postgres    false    218            +           0    0    users_s_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.users_s_id_seq', 76, true);
          public          postgres    false    220            ?           2606    16446    result result_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.result
    ADD CONSTRAINT result_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.result DROP CONSTRAINT result_pkey;
       public            postgres    false    215               M  x??S?n?0>SO?'(?vk?SP?(?n??E??_???d??ӏt?f??v?-???$?????3?R??
??"im?6>?>?"???$p?:/2??y??? M*!?mA?QR?yɶm??6?y??d?`?o?	?Հ???Fl?ۈª??*
4N:mq?fb?`a"*$!??}&?l???@G?)1???8o??P??
|??Ah,?3o?$??N+??!i???????b?;!??e3?uܵ	?4?w???'fe(2?Vҩ"A??jW????є???g?
??'?0?"??@#K4`/%p???э??%sP.Z3e?~?r???w????7C?k$n?EımTe
t?ՙ??M?0??ʿ???4_<V??Ο?d?3?<??Y???tTÃH?8]1aIh?swd?????.vɌ?$?M;??r???-?.???? ? ?a?*%>?yU?%x?ە????J?
g`.???W?tE?i\?M?]0nW+??<{??&?zCN$????q????߿a4??8?}????E?پC????O?,ћ.?F???:7??y$??g6???
?N?}?????{9c??@ϵ         C  x??R?n?0</??_?v?$? 襇????B?oJ?CQ????PN
?=?Š?+jv8???i?P۬2??E?3?$X????岸?,?z,*??#JU???U?[??n~
??`]u?=c??8	QZ7-x)I???M?ac?)???@]>v???C}?z??????8=Ϻdr???II<?.??????dxOх??'??v??T?ޑ??-?o%??ʐ???(?????2DI}??o???s.?<?ַ?????L+h?p??$$?????6,P?&??~?????$km?օ???'&tYgMy?p?˙ކ?0KFa(???3(4?¤K?EOe?<B?Z???`_ب??t8?	-???M?_?2?????/z&1*1????'?$Y???~?=?6???????D?~?????#?QU?T?4??E?7%??OZ??=%?q$!?Z??GJ)xp??????[{????qab????????=????Ὶ?o?|?cIq3??}??+?SЧ?{??t???t"?IX???[T?	ڸ?ƫ?v?????νH?x?ҿ)??B?d?sY:͟??e???????i??T???%?6l??6jJ?         ?   x?????0?g?)?H??l0????4?MEJm?'?*??*E????|qG?[?u???,?o?۷"?L?????F??q?֡?H?C??pj?[O?mO?L?:?<p?'
$@?F?	??J?ċ???<?s?)???k]?p????'_e?N]??>?????X??cМ/??'{?U??X?ʹ??B)?3;?O         ?  x??T[??0??N?D )>$}?=??m?5??] ُ޾?c{]?Y?ۈ??pȑ???sw?\????%?|;???8 4?Ƙ0 ?ab????%?Zɂ??? ??rvL2,?%H?%????o0?x.klM0e??~?{f`C?ܲ%ɕ?ޅ!?5??????xGB?I?d(?wIĂ?!?B[#J/E?5n???%H??ż??X?R?>?BA?em????Zg?oL?V?zF%"M?????ꂐs?,?ze?C>#II??CɸH???????l?1Ot???/3?t:?t????t+?6?	?W?waz??+?AD?ED8?"@??5Q?\6X<??݇???}?Z}%???I???,-???0?.-?`??Z~??+ ?*???\?&??G|3??Xx??~?????E??e;r<?FK?k??)??F????A?ZLR??#pHRч?ڪ^?? pcN??n?y??E?????U?ZSw0????k2-P?j~??R????n?         ?  x??T?n?@<{???sd? ?%ZEby?????<???e???o??˞vUu??5??R_2Ck???	:?ۖ Cw,@3??k2??^?6?>??S???B?`???????>??G??f?!G-?K?{yY>ʅ?`/?|??^Jy???@?????j?4??Ll??y???J=J"-??K?Vĸ?????M?+??ւ
???6?x?	?bJ#\?Ǵ;?"?6????????????>?l??ꝺ??$)`?I?7?m(p?6????;yXz??K???sC?]?(}G1??k????6????????R:E??M?:D>??=J??l???z??k????2hӫ?if?2?????YY????4??4?Y?s2a^??uG?8????A???դVJ????         ?  x?ݓ??? ???S?4????w?i?M*U???E???? ??&{^?????nF??e?Pw????{羜8??E.?4?????lO???f?h?pb?x?f"/?<^J?eJl`vv?ʨJ5U????B[??'???+?-U??qŦ?Y"?86*?]??|???'H?d VպF%|l7?d|??>w?2???{?.??'?@Ⱦ??~??4bd?6? ?g??py?e%҅?c15?y99^n??I?b?G?_?????b?΁??`???ʢ[Ī?[?x|??ؙ??ԍ????-???%?[?_???E8??????Ƹ???0}[?Vd?5<?kI?KXG?????.??\Ȕ?s¢?s???y?Q??!H2[Y??Rm۾???B? 
??     